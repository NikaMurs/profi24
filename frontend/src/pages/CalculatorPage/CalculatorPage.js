import './calculatorPage.css'

export default function CalculatorPage() {

    return (
        <>
            <div className="calculatorHeader">
                <div className="calculatorHeaderLeft">
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" disabled />
                        <p>Технология печати</p>
                    </label>
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" id="radioLeft1" name="radioLeft" checked="checked" />
                        <p>Формат</p>
                    </label>
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" id="radioLeft2" name="radioLeft" />
                        <p>Тип бумаги</p>
                    </label>
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" id="radioLeft3" name="radioLeft" />
                        <p>Основа страниц</p>
                    </label>
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" id="radioLeft4" name="radioLeft" />
                        <p>Тип обложки</p>
                    </label>
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" id="radioLeft5" name="radioLeft" />
                        <p>Вариант обложки</p>
                    </label>
                    <label className="calculatorHeaderLeftRadio">
                        <input type="radio" id="radioLeft6" name="radioLeft" />
                        <p>Количество разворотов</p>
                    </label>
                    {/* <label className="calculatorHeaderLeftRadio">
                    <input type="radio" id="radioLeft7" name="radioLeft" />
                        <p>Дополнительно</p>
                </label>  */}
                </div>
                <input type="hidden" id="hid1" value="0" name="hid1" />
                <input type="hidden" id="hid2" value="0" name="hid2" />
                <input type="hidden" id="hid3" value="0" name="hid3" />
                <input type="hidden" id="hid4" value="0" name="hid4" />
                <input type="hidden" id="hid5" value="0" name="hid5" />
                <input type="hidden" id="hid6" value="0" name="hid6" />
                <input type="hidden" id="pid" value="<?php echo($product_id); ?>" name="pid" />
                <input type="hidden" id="uid" value="<?php echo($user); ?>" name="uid" />

                <input type="hidden" id="f7" value="0" name="f7" />
                <input type="hidden" id="b9" value="0" name="b9" />
                <input type="hidden" id="f8" value="0" name="f8" />
                <input type="hidden" id="t8" value="0" name="t8" />



                <div className="calculatorHeaderCenter">
                    <p className="calculatorHeaderCenterText " id="radioCenter0">{'<?php echo($product_name); ?>'}</p>
                    <p className="calculatorHeaderCenterText calculatorHeaderCenterTextSelect" id="radioCenter1">Выбрать</p>
                    <p className="calculatorHeaderCenterText" id="radioCenter2">Выбрать</p>
                    <p className="calculatorHeaderCenterText" id="radioCenter3">Выбрать</p>
                    <p className="calculatorHeaderCenterText" id="radioCenter4">Выбрать</p>
                    <p className="calculatorHeaderCenterText" id="radioCenter5">Выбрать</p>
                    <p className="calculatorHeaderCenterText" id="radioCenter6">Выбрать</p>
                    {/* <p className="calculatorHeaderCenterText" id="radioCenter7">Значение</p> */}


                </div>

                <div className="calculatorHeaderRight">
                    <div className="calculatorHeaderRightText">
                        <p>Параметры заказа:</p>
                        <p id="size_r_px">Размер разворота:</p>
                        <p id="size_r_mm"></p>
                        <p id="size_o_px">Размеры обложки: </p>
                        <p id="size_o_mm"></p>
                    </div>
                    <div className="calculatorHeaderRightDowland">
                        <p>Скачать направляющие</p>
                        <a id="rul_cover" onclick="alert('Нужно выбрать все параметры.')" href="/#">Для обложки</a>
                        <a id="rul_book" href="/#">Для книги</a>
                    </div>
                    <div className="calculatorHeaderRightButtons">
                        <button className="calculatorHeaderRightButton  back">Назад</button>
                        <button className="calculatorHeaderRightButton next">Далее</button>
                    </div>
                    <div className="calculatorHeaderRightPrices">
                        <div className="calculatorHeaderRightPriceBook">
                            <p>Цена одной книги:<br /><span className="calculatorHeaderRightPrice priceBook">0 р.</span></p>
                        </div>
                        <div className="calculatorHeaderRightPriceTotal">
                            <p>Цена всего заказа:<br /><span className="calculatorHeaderRightPrice priceOrder">0 р.</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="innerCard">
                <div className="innerCardItem  hide" id="innerCardItem0">
                    <div className="innerCardItemTitle">
                        <span>Технология печати</span>
                    </div>
                    <div className="innerCardItemContent">
                        <div className="innerCardItemBlock">
                            <div className="innerCardItemBlockTitleWrapper">
                                <p className="innerCardItemBlockTitle">Тип 1</p>
                            </div>
                            <div className="innerCardItemBlockSquare"></div>
                        </div>
                    </div>
                </div>



                <div className="innerCardItem" id="innerCardItem1">
                    <div className="innerCardItemTitle">
                        <span>Формат</span>
                    </div>
                    <div className="innerCardItemContent">


                    </div>
                </div>



                <div className="innerCardItem hide" id="innerCardItem2">
                    <div className="innerCardItemTitle">
                        <span>Тип бумаги</span>
                    </div>
                    <div className="innerCardItemContent">

                    </div>
                </div>


                <div className="innerCardItem hide" id="innerCardItem3">
                    <div className="innerCardItemTitle">
                        <span>Основа страниц</span>
                    </div>
                    <div className="innerCardItemContent">


                    </div>
                </div>

                <div className="innerCardItem hide" id="innerCardItem4">
                    <div className="innerCardItemTitle">
                        <span>Тип обложки</span>
                    </div>
                    <div className="innerCardItemContent">


                    </div>
                </div>

                <div className="innerCardItem hide" id="innerCardItem5">
                    <div className="innerCardItemTitle">
                        <span>Вариант обложки</span>
                    </div>
                    <div className="innerCardItemContent">

                    </div>
                </div>
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

        </>
    )
}