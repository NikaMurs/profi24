import { useEffect, useState } from 'react';
import './calculatorPage.css';
import formatPrice from '../../functions/formatPrice';
import Modal from '../../components/Modal/Modal';
import fetchTest from '../../functions/fetchTest';
import { useParams, useNavigate } from 'react-router-dom';

const CalculatorHeader = ({
    data,
    selectedPosition,
    selectedValues,
    handleRadioChange,
    navigate,
    getBlockSize,
    getCoverSize,
    getPrice,
    showModal,
    closeModal,
    onDownloadGuideLinesCover,
    onDownloadGuideLinesBook,
    nextButton,
    prevButton
}) => (
    <div className="calculatorHeader">
        <div className="calculatorHeaderLeft">
            <label className="calculatorHeaderLeftRadio" onClick={() => { navigate('/products') }}>
                <input type="radio" disabled />
                <p>Технология печати</p>
            </label>
            {data?.calculatorSettings.map((el) => (
                <label className="calculatorHeaderLeftRadio" key={el.id}>
                    <input type="radio" id={el.id} name="radioLeft" checked={selectedPosition === el.id} onChange={handleRadioChange} />
                    <p>{el.title}</p>
                </label>
            ))}
        </div>
        <div className="calculatorHeaderCenter">
            <p className="calculatorHeaderCenterText" onClick={() => { navigate('/products') }}>{data?.title}</p>
            {data?.calculatorSettings.map((el) => (
                <label className="calculatorHeaderCenterRadio" key={el.id}>
                    <input type="radio" id={el.id} name="centerLeft" checked={selectedPosition === el.id} onChange={handleRadioChange} />
                    <p className={`calculatorHeaderCenterText ${selectedPosition === el.id ? 'calculatorHeaderCenterTextSelect' : ''}`} id={el.id}>
                        {selectedValues === null ? <></> :
                            el.id === 'cnt' ? 'Выбрать' :
                                selectedValues[el.id] === undefined ? 'Выбрать' :
                                    selectedValues[el.id].title
                        }
                    </p>
                </label>
            ))}
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
                <button className="calculatorHeaderRightButton back" onClick={prevButton}>Назад</button>
                <button className="calculatorHeaderRightButton next" onClick={nextButton}>Далее</button>
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
);

const CalculatorPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState('for');
    const [selectedValues, setSelectedValues] = useState({});
    const [settingsTitleArr, setSettingsTitleArr] = useState([]);
    const [numberOfSpreads, setNumberOfSpreads] = useState(1);
    const [numberOfBooks, setNumberOfBooks] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [maxCount, setMaxCount] = useState(1);

    useEffect(() => {
        fetchTest();
        fetch(`${process.env.REACT_APP_URL}/productInfo/?id=${productId}`)
            .then(response => response.json())
            .then(data => setData(data.product))
            .catch(error => console.log("Ошибка при обработке ответа: /test", error));
    }, [productId]);

    useEffect(() => {
        if (data) {
            const settingsTitleArr = [];
            let selectedValue = { pro: productId };

            data.calculatorSettings.forEach(el => {
                selectedValue[el.id] = el.id === 'cnt' ? { numberOfSpreads: 1, numberOfBooks: 1 } : undefined;
                settingsTitleArr.push(el.id);
            });

            setSelectedValues(selectedValue);
            setSettingsTitleArr(settingsTitleArr);
        }
    }, [data, productId]);

    useEffect(() => {
        if (selectedValues?.for) {
            setSelectedValues(prev => ({ ...prev, tco: undefined }));
        }
    }, [selectedValues?.for]);

    useEffect(() => {
        if (selectedValues?.bas) {
            setSelectedValues(prev => ({
                ...prev,
                cnt: {
                    numberOfSpreads,
                    numberOfBooks
                }
            }));
        }
    }, [selectedValues?.bas, numberOfSpreads, numberOfBooks]);

    useEffect(() => {
        if (selectedPosition === 'cnt') {
            getMaxCount();
        }
        if (selectedPosition !== 'tco' && data?.tco) {
            data.tco.forEach(el => {
                const arr = el.indicatorFormat.split(',').map(item => parseInt(item.trim(), 10));
                el.hide = !arr.includes(selectedValues.for?.id);
            });
        }
    }, [selectedPosition, data, selectedValues?.for?.id]);

    const getPrice = () => {
        if (!data || !selectedValues?.for || !selectedValues?.bas || !selectedValues?.tco) {
            return { oneBook: 0, total: 0 };
        }

        const forPrice = data.for.find(el => el.id === selectedValues.for.id)?.price || 0;
        const forBasePrice = data.for.find(el => el.id === selectedValues.for.id)?.basePrice || 0;
        const basPrice = data.bas.find(el => el.id === selectedValues.bas.id)?.price || 0;
        const multiplier = data.tco.find(el => el.id === selectedValues.tco.id)?.multiplier || 0;

        const costBlock = (forPrice + basPrice) * numberOfSpreads;
        const costCover = forBasePrice * multiplier;
        const costOneBook = formatPrice(costBlock + costCover);
        const costTotal = formatPrice((costBlock + costCover) * numberOfBooks);

        return { oneBook: costOneBook, total: costTotal };
    };

    const getBlockSize = () => {
        const selectedFor = data?.for.find(el => el.id === selectedValues?.for?.id);
        return {
            size: selectedFor?.size || '0x0',
            urlJpeg: selectedFor?.guides_jpeg,
            urlPsd: selectedFor?.guides_psd,
            urlIndd: selectedFor?.guides_indd,
        };
    };

    const getCoverSize = () => {
        if (!data || !selectedValues?.for || !selectedValues?.pap || !selectedValues?.bas) {
            return { size: '0x0' };
        }

        let width = data.pap.find(el => el.id === selectedValues.pap.id)?.width || 0;
        width += data.bas.find(el => el.id === selectedValues.bas.id)?.width || 0;
        width *= numberOfSpreads;

        const cover = data.nco.find(el => el.format === selectedValues.for.title);
        if (cover && width > cover.width) {
            const nextCover = data.nco[data.nco.indexOf(cover) + 1];
            return nextCover ? { size: nextCover.size, urlJpeg: nextCover.guides_jpeg, urlPsd: nextCover.guides_psd, urlIndd: nextCover.guides_indd } : { size: 'XXXxXXX' };
        }

        return { size: cover.size, urlJpeg: cover.guides_jpeg, urlPsd: cover.guides_psd, urlIndd: cover.guides_indd };
    };

    const handleRadioChange = (event) => {
        setSelectedPosition(event.target.id);
    };

    const onClickCardItemBlock = (id, title) => {
        setSelectedValues(prevSelectedValues => ({
            ...prevSelectedValues,
            [selectedPosition]: { id, title },
        }));
        nextButton();
    };

    const nextButton = () => {
        const settingsTitleIndex = settingsTitleArr.indexOf(selectedPosition);
        if (settingsTitleIndex !== -1 && settingsTitleIndex < settingsTitleArr.length - 1) {
            setSelectedPosition(settingsTitleArr[settingsTitleIndex + 1]);
        }
    };

    const prevButton = () => {
        const settingsTitleIndex = settingsTitleArr.indexOf(selectedPosition);
        if (settingsTitleIndex > 0) {
            setSelectedPosition(settingsTitleArr[settingsTitleIndex - 1]);
        }
    };

    const handleSpreadChange = (event) => {
        const value = parseInt(event.target.value);
        setNumberOfSpreads(value);
        setSelectedValues(prev => ({
            ...prev,
            cnt: {
                ...prev.cnt,
                numberOfSpreads: value
            }
        }));
    };

    const handleBookChange = (event) => {
        const value = parseInt(event.target.value);
        setNumberOfBooks(value);
        setSelectedValues(prev => ({
            ...prev,
            cnt: {
                ...prev.cnt,
                numberOfBooks: value
            }
        }));
    };

    const onDownloadGuideLinesCover = () => {
        const data = getCoverSize();
        setShowModal({
            title: 'обложки',
            urlJpeg: data.urlJpeg,
            urlPsd: data.urlPsd,
            urlIndd: data.urlIndd
        });
    };

    const onDownloadGuideLinesBook = () => {
        const data = getBlockSize();
        setShowModal({
            title: 'книги',
            urlJpeg: data.urlJpeg,
            urlPsd: data.urlPsd,
            urlIndd: data.urlIndd
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const getMaxCount = () => {
        const selectedBas = data.bas.find(el => el.id === selectedValues.bas?.id);
        if (selectedBas) {
            setMaxCount(selectedBas.maxCount);
        }
    };

    const isUploadButtonVisible = () => {
        const isAllFieldsSelected = Object.keys(selectedValues).every(key => selectedValues[key]);
        const isLastStep = settingsTitleArr.indexOf(selectedPosition) === settingsTitleArr.length - 1;
        return isAllFieldsSelected && isLastStep;
    };

    const handleUploadButtonClick = () => {
        const parameters = {
            pro: parseInt(selectedValues.pro),
            for: selectedValues.for.id,
            pap: selectedValues.pap.id,
            bas: selectedValues.bas.id,
            tco: selectedValues.tco.id,
            var: selectedValues.var.id,
            cnt: selectedValues.cnt,
            blockSize: getBlockSize().size,
            coverSize: getCoverSize().size,
        }

        navigate('/upload', { state: parameters });
    };

    return (
        <main>
            <CalculatorHeader
                data={data}
                selectedPosition={selectedPosition}
                selectedValues={selectedValues}
                handleRadioChange={handleRadioChange}
                navigate={navigate}
                getBlockSize={getBlockSize}
                getCoverSize={getCoverSize}
                getPrice={getPrice}
                showModal={showModal}
                closeModal={closeModal}
                onDownloadGuideLinesCover={onDownloadGuideLinesCover}
                onDownloadGuideLinesBook={onDownloadGuideLinesBook}
                nextButton={nextButton}
                prevButton={prevButton}
            />
            <div className="innerCard">
                <div className="innerCardItem">
                    {selectedPosition !== 'cnt' ? (
                        <>
                            <div className="innerCardItemTitle">
                                <span>{data?.calculatorSettings.find(el => el.id === selectedPosition)?.title}</span>
                            </div>
                            <div className="innerCardItemContent">
                                {data?.[selectedPosition]?.filter(el => !el.hide).map(el => (
                                    <div className="innerCardItemBlock" key={`${selectedPosition}_${el.id}`} onClick={() => { onClickCardItemBlock(el.id, el.title) }}>
                                        <div className="innerCardItemBlockTitleWrapper">
                                            <p className="innerCardItemBlockTitle">{el.title}</p>
                                        </div>
                                        <div className="innerCardItemBlockSquare" style={{ backgroundImage: `url('${el.img}` }}></div>
                                    </div>
                                ))}
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
                    {isUploadButtonVisible() && (
                        <div className="calcUploadButton" id="calcUploadButton">
                            <button className="calcBottomButton" onClick={handleUploadButtonClick}>Загрузить макеты на сайт</button>
                        </div>
                    )}
                    <div className="calcNavigButtons">
                        <button className="calcNavigButton back" onClick={prevButton}>Назад</button>
                        <button className="calcNavigButton next" onClick={nextButton}>Далее</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CalculatorPage;
