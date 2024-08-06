
export default function OrdersTable() {


    function TableRow() {
        return (
            <tr style={{ fontSize: '10px' }}>
                <td style={{ fontSize: '15px' }}>01.02.2004</td>
                <td style={{ fontSize: '15px' }}>03.02.2004</td>
                <td style={{ fontSize: '15px' }}>2</td>
                <td style={{ fontSize: '15px' }}>000-000</td>
                <td style={{ fontSize: '15px', backgroundColor: '#FFDAFD' }}>00</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>10</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>5</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>print</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>20x30</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>белая</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>картон</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>твердая</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>разные</td>
                <td style={{ backgroundColor: '#FFDAFD' }}>нет</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>Дата</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>10</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>11</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>12</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>13</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>14</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>15</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>Жесткая</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>77%</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>ПЭК</td>
                <td style={{ backgroundColor: '#FFFD4D' }}>000-000-000</td>
                <td>Москва</td>
                <td>1234</td>
                <td>Коммент наш</td>
                <td>Коммент юзера</td>
                <td></td>
            </tr>
        )
    }

    return (
        <table style={{ fontSize: '12px' }}>
            <tbody>
                <tr style={{ backgroundColor: '#ECECEC' }}>
                    <td style={{ width: '80px' }}></td>
                    <td style={{ width: '80px' }}></td>
                    <td style={{ width: '30px' }}></td>
                    <td style={{ width: '80px' }}></td>
                    <td style={{ width: '30px' }}></td>
                    <td style={{ width: '30px' }}>Класс</td>
                    <td style={{ width: '30px' }}>С/Р</td>
                    <td style={{ width: '80px' }}>PRO</td>
                    <td style={{ width: '80px' }}>FOR</td>
                    <td style={{ width: '80px' }}>PAP</td>
                    <td style={{ width: '60px' }}>BAS</td>
                    <td style={{ width: '80px' }}>TCO</td>
                    <td style={{ width: '80px' }}>VAR</td>
                    <td style={{ width: '150px' }}>DOP</td>
                    <td style={{ width: '30px' }}>10</td>
                    <td style={{ width: '30px' }}>10</td>
                    <td style={{ width: '30px' }}>20</td>
                    <td style={{ width: '30px' }}>10</td>
                    <td style={{ width: '30px' }}>20</td>
                    <td style={{ width: '30px' }}>10</td>
                    <td style={{ width: '30px' }}>10</td>
                    <td style={{ width: '30px' }}>10</td>
                    <td style={{ width: '60px' }}></td>
                    <td style={{ width: '30px' }}></td>
                    <td style={{ width: '100px' }}></td>
                    <td style={{ width: '150px' }}></td>
                    <td style={{ width: '60px' }}></td>
                    <td style={{ width: '100px' }}></td>
                    <td style={{ width: '100px' }}></td>
                    <td style={{ width: '190px' }}></td>
                </tr>
                <tr style={{ fontSize: '10px' }}>
                    <td style={{ fontSize: '15px' }}>Дата приёма</td>
                    <td style={{ fontSize: '15px' }}>Дата Гот.</td>
                    <td style={{ fontSize: '15px' }}>Срок</td>
                    <td style={{ fontSize: '15px' }}>Order</td>
                    <td style={{ fontSize: '15px', backgroundColor: '#FFDAFD' }}>Or+</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Кол-во книг</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Кол-во р-в (страниц)</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Продукт</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Формат</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Бумага</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Основа</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Тип обложки</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Варианты</td>
                    <td style={{ backgroundColor: '#FFDAFD' }}>Опции</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Принят</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Печ. блок</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Сбор. блок</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Печ. обл</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Сбор. обл</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Вклейка</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>ОТК</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Упаковка</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>0-100</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>ТК</td>
                    <td style={{ backgroundColor: '#FFFD4D' }}>Трек-номер</td>
                    <td>Город</td>
                    <td>ID ф-а</td>
                    <td>Коммент наш</td>
                    <td>Коммент юзера</td>
                    <td></td>
                </tr>
                <TableRow />
            </tbody>
        </table>
    )
}