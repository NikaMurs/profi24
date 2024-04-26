import { useEffect, useState } from 'react'
import './calculatorPage.css'
import formatPrice from '../../functions/formatPrice';
import Modal from '../../components/Modal/Modal';
import fetchTest from '../../functions/fetchTest';
import { useParams } from 'react-router-dom';

export default function CalculatorPage() {
    const { productId } = useParams();

    const [data, setData] = useState(null)
    const [selectedPosition, setSelectedPosition] = useState('for');
    const [selectedValues, setSelectedValues] = useState(null)
    const [settingsTitleArr, setSettingsTitleArr] = useState([])
    const [numberOfSpreads, setNumberOfSpreads] = useState(1);
    const [numberOfBooks, setNumberOfBooks] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [maxCount, setMaxCount] = useState(1);


    useEffect(() => {
        fetchTest();
        fetch(`${process.env.REACT_APP_URL}/productInfo/?id=${productId}`)
            .then(response => {
                if (!response.ok) {
                    console.log("Ошибка запроса /test");
                }
                return response.json();
            })
            .then(data => {
                setData(data.product)
            })
            .catch(error => {
                console.log("Ошибка при обработке ответа: /test", error);
            });
    }, [])

    useEffect(() => {
        if (data) {
            const settingsTitleArr = [];
            let selectedValue = {
                pro: productId
            }
            data.calculatorSettings.forEach((el) => {
                if (el.id === 'cnt') {
                    selectedValue[el.id] = {
                        numberOfSpreads: 1,
                        numberOfBooks: 1
                    }
                } else {
                    selectedValue[el.id] = undefined;
                }
                settingsTitleArr.push(el.id);
            });
            setSelectedValues(selectedValue);
            setSettingsTitleArr(settingsTitleArr);
        }
    }, [data])

    useEffect(() => {
        if (selectedPosition === 'cnt') {
            getMaxCount()
        }
        if (selectedPosition !== 'tco') {
            data?.tco.forEach((el) => {
                const arr = el.indicatorFormat.split(',').map(function (item) {
                    return parseInt(item.trim(), 10);
                });
                if (arr.includes(selectedValues.for?.id)) {
                    el.hide = false;
                } else {
                    el.hide = true;
                }
            })
        }
    }, [selectedPosition])

    function getPrice() {
        let forPrice;
        let forBasePrice;

        let basPrice;
        let multiplier;

        let costСover;
        let costBlock;

        let costOneBook = 0;
        let costTotal = 0;

        if (data !== null && selectedValues?.for !== undefined && selectedValues?.bas !== undefined && selectedValues?.tco !== undefined) {

            data.for.forEach((el, ind) => {
                if (el.id === selectedValues.for.id) {
                    forPrice = data.for[ind].price
                    forBasePrice = data.for[ind].basePrice
                }
            })

            data.bas.forEach((el, ind) => {
                if (el.id === selectedValues.bas.id) {
                    basPrice = data.bas[ind].price
                }
            })

            data.tco.forEach((el, ind) => {
                if (el.id === selectedValues.tco.id) {
                    multiplier = data.tco[ind].multiplier
                }
            })

            costBlock = (forPrice + basPrice) * numberOfSpreads;
            costСover = forBasePrice * multiplier;

            costOneBook = formatPrice(costBlock + costСover);
            costTotal = formatPrice((costBlock + costСover) * numberOfBooks);

        }

        return {
            oneBook: costOneBook,
            total: costTotal
        }
    }

    function getBlockSize() {
        let size = '0x0';
        let urlJpeg;
        let urlPsd;
        let urlIndd;
        if (data !== null && selectedValues?.for !== undefined) {
            data.for.forEach((el, ind) => {
                if (el.id === selectedValues.for.id) {
                    size = data.for[ind].size;
                    urlJpeg = data.for[ind].guides_jpeg;
                    urlPsd = data.for[ind].guides_psd;
                    urlIndd = data.for[ind].guides_indd;
                }
            })
        }
        return {
            size: size,
            urlJpeg: urlJpeg,
            urlPsd: urlPsd,
            urlIndd: urlIndd,
        }
    }

    function getCoverSize() {
        let size = '0x0'
        let urlJpeg;
        let urlPsd;
        let urlIndd;

        if (data !== null && selectedValues?.for !== undefined && selectedValues?.pap !== undefined && selectedValues?.bas !== undefined) {
            let width = 0;
            data.pap.forEach((el, ind) => {
                if (el.id === selectedValues.pap.id) {
                    width = width + data.pap[ind].width
                }
            })
            data.bas.forEach((el, ind) => {
                if (el.id === selectedValues.bas.id) {
                    width = width + data.bas[ind].width
                }
            })
            width = width * numberOfSpreads;

            for (let i = 0; i < data.nco.length; i++) {
                const el = data.nco[i];

                if (el.format === selectedValues.for.title) {
                    size = el.size;
                    urlJpeg = el.guides_jpeg;
                    urlPsd = el.guides_psd;
                    urlIndd = el.guides_indd;
                    break;
                }
            }
            data.nco.forEach((el, ind) => {
                if (el.format === selectedValues.for.title) {
                    if (width > el.width) {
                        if (data.nco[ind + 1]) {
                            size = data.nco[ind + 1].size
                            urlJpeg = data.nco[ind + 1].guides_jpeg;
                            urlPsd = data.nco[ind + 1].guides_jpeg;
                            urlIndd = data.nco[ind + 1].guides_jpeg;
                        } else {
                            size = 'XXXxXXX'
                        }
                    }
                }
            })
        }
        return {
            size: size,
            urlJpeg: urlJpeg,
            urlPsd: urlPsd,
            urlIndd: urlIndd,
        }
    }

    const handleRadioChange = (event) => {
        setSelectedPosition(event.target.id);
    };


    function onClickCardItemBlock(id, title) {
        setSelectedValues((prevSelectedValue) => ({
            ...prevSelectedValue,
            [selectedPosition]: { id: id, title: title },
        }));
        nextButton()
    }

    function nextButton() {
        let settingsTitleIndex;
        settingsTitleArr.forEach((el, ind) => {
            if (el === selectedPosition) {
                settingsTitleIndex = ind
            }
        })
        if (settingsTitleIndex !== settingsTitleArr.length - 1) {
            setSelectedPosition(settingsTitleArr[settingsTitleIndex + 1])
        }
    }

    function prevButton() {
        let settingsTitleIndex;
        settingsTitleArr.forEach((el, ind) => {
            if (el === selectedPosition) {
                settingsTitleIndex = ind
            }
        })
        if (settingsTitleIndex !== 0) {
            setSelectedPosition(settingsTitleArr[settingsTitleIndex - 1])
        }
    }

    const handleSpreadChange = (event) => {
        selectedValues.cnt.numberOfSpreads = parseInt(event.target.value)
        setNumberOfSpreads(parseInt(event.target.value));
    };

    const handleBookChange = (event) => {
        selectedValues.cnt.numberOfBooks = parseInt(event.target.value)
        setNumberOfBooks(parseInt(event.target.value));
    };


    function onDownloadGuideLinesCover() {
        const data = getCoverSize();

        setShowModal({
            title: 'обложки',
            urlJpeg: data.urlJpeg,
            urlPsd: data.urlPsd,
            urlIndd: data.urlIndd
        });
    }

    function onDownloadGuideLinesBook() {
        const data = getBlockSize();
        setShowModal({
            title: 'книги',
            urlJpeg: data.urlJpeg,
            urlPsd: data.urlPsd,
            urlIndd: data.urlIndd
        });
    }

    function closeModal() {
        setShowModal(false);
    };

    function getMaxCount() {
        data.bas.forEach((el, ind) => {
            if (el.id === selectedValues.bas.id) {
                setMaxCount(data.bas[ind].maxCount)
            }
        })
    }

    return (
        <main>
            <div className="calculatorHeader">
                <div className="calculatorHeaderLeft">
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" disabled />
                        <p>Технология печати</p>
                    </label>
                    {data?.calculatorSettings.map((el) => {
                        return (
                            <label className="calculatorHeaderLeftRadio" key={el.id}>
                                <input type="radio" id={el.id} name="radioLeft" checked={selectedPosition === el.id} onChange={handleRadioChange} />
                                <p>{el.title}</p>
                            </label>
                        )
                    })}
                </div>

                <div className="calculatorHeaderCenter">
                    <p className="calculatorHeaderCenterText ">{data?.title}</p>
                    {data?.calculatorSettings.map((el) => {
                        return (
                            <p key={el.id} className={`calculatorHeaderCenterText ${selectedPosition === el.id ? 'calculatorHeaderCenterTextSelect' : ''}`} id={el.id}>
                                {selectedValues === null ? <></> :
                                    el.id === 'cnt' ? 'Выбрать' :
                                        selectedValues[el.id] === (undefined) ? 'Выбрать' :
                                            selectedValues[el.id].title
                                }
                            </p>
                        )
                    })}
                </div>

                <div className="calculatorHeaderRight">
                    <div className="calculatorHeaderRightText">
                        <p>Параметры заказа:</p>
                        <p id="size_r_px">{`Размер разворота: ${getBlockSize().size}`}</p>
                        <p id="size_r_mm"></p>
                        <p id="size_o_px">{`Размеры обложки: ${getCoverSize().size}`}</p>
                        <p id="size_o_mm"></p>
                    </div>
                    <div className="calculatorHeaderRightDowland">
                        <p>Скачать направляющие</p>
                        <a id="rul_cover" onClick={onDownloadGuideLinesCover} href='#'>Для обложки</a>
                        <a id="rul_book" onClick={onDownloadGuideLinesBook} href='#'>Для книги</a>
                    </div>
                    {showModal && <Modal closeModal={closeModal} showModal={showModal} />}

                    <div className="calculatorHeaderRightButtons">
                        <button className="calculatorHeaderRightButton back" onClick={() => { prevButton() }}>Назад</button>
                        <button className="calculatorHeaderRightButton next" onClick={() => { nextButton() }}>Далее</button>
                    </div>
                    <div className="calculatorHeaderRightPrices">
                        <div className="calculatorHeaderRightPriceBook">
                            <p>Цена одной книги:<br /><span className="calculatorHeaderRightPrice priceBook">{`${getPrice().oneBook}р`}</span></p>
                        </div>
                        <div className="calculatorHeaderRightPriceTotal">
                            <p>Цена всего заказа:<br /><span className="calculatorHeaderRightPrice priceOrder">{`${getPrice().total}р`}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="innerCard">
                <div className="innerCardItem hide">
                    {selectedPosition !== 'cnt' ? (
                        <>
                            <div className="innerCardItemTitle">
                                <span>{data?.calculatorSettings.map((el) => {
                                    if (el.id === selectedPosition) {
                                        return el.title
                                    }
                                })}</span>
                            </div>
                            <div className="innerCardItemContent">
                                {data === null ? <></> :
                                    data[selectedPosition].map((el) => {
                                        if (!el.hide) {
                                            return (
                                                <div className="innerCardItemBlock" key={`${selectedPosition}_${el.id}`} onClick={() => { onClickCardItemBlock(el.id, el.title) }}>
                                                    <div className="innerCardItemBlockTitleWrapper">
                                                        <p className="innerCardItemBlockTitle">{el.title}</p>
                                                    </div>
                                                    <div className="innerCardItemBlockSquare" style={{ backgroundImage: `url('${el.img}` }}></div>
                                                </div>
                                            )
                                        }
                                    })}
                            </div>
                        </>
                    ) : (
                        <div className="innerCardItemContent" style={{ backgroundColor: '#FFFFFF', border: '1px solid #848E97', borderRadius: '10px' }}>
                            <div className="innerCardItemRange">
                                <p className="innerCardItemRangeText">Количество разворотов</p>
                                <div className="rangeWrapper">
                                    <label className="rangeLabelAmount" id="rangeLabelAmount0">{numberOfSpreads}</label>
                                    <input className="rangeAmount" id="rangeAmount0" type="range" min="1" max={maxCount} step="1" value={numberOfSpreads} onChange={handleSpreadChange} />
                                </div>
                            </div>
                            <div className="innerCardItemRange">
                                <p className="innerCardItemRangeText">Количество книг</p>
                                <div className="rangeWrapper">
                                    <label className="rangeLabelAmount" id="rangeLabelAmount1">{numberOfBooks}</label>
                                    <input className="rangeAmount" id="rangeAmount1" type="range" min="1" max="50" step="1" value={numberOfBooks} onChange={handleBookChange} />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="calcNavigButtons">
                        <button className="calcNavigButton back" onClick={() => { prevButton() }}>Назад</button>
                        <button className="calcNavigButton next" onClick={() => { nextButton() }}>Далее</button>
                    </div>
                </div>

            </div>


            {/* <div className="innerCard">

                <div className="innerCardItem hide" id="innerCardItem6">
                    <div className="innerCardItemContent" style={{backgroundColor: '#FFFFFF', border: '1px solid #848E97', borderRadius: '10px'}}>
                        <div className="innerCardItemRange">
                            <p className="innerCardItemRangeText">Количество разворотов</p>
                            <div className="rangeWrapper">
                                <label className="rangeLabelAmount" id="rangeLabelAmount0">1</label>
                                <input className="rangeAmount" id="rangeAmount0" type="range" min="1" max="10" step="1" value="1" />
                            </div>
                        </div>
                        <div className="innerCardItemRange">
                            <p className="innerCardItemRangeText">Количество книг</p>
                            <div className="rangeWrapper">
                                <label className="rangeLabelAmount" id="rangeLabelAmount1">1</label>
                                <input className="rangeAmount" id="rangeAmount1" type="range" min="1" max="50" step="1" value="1" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="calcUploadButton hide" id="calcUploadButton">
                <button className="calcBottomButton">Загрузить макеты на сайт</button>
            </div>
            <div className="calcNavigButtons">
                <button className="calcNavigButton back">Назад</button>
                <button className="calcNavigButton next">Далее</button>
            </div> */}

        </main>
    )
}