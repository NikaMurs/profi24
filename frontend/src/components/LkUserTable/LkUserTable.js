import './lkUserTable.css'

export default function LkUserTable() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '30px' }}><button className="tableButton"></button></td>
                <td style={{ width: '105px' }}>Готов к отправке в печать</td>
                <td style={{ width: '60px' }}>0%</td>
                <td style={{ width: '75px' }}>11</td>
                <td style={{ width: '75px' }}>11</td>
                <td style={{ width: '350px' }}>Фотопечать Lay-Flat, 20х20, Fuji глянец, Без основы, Классическая фотообложка, Глянцевая ламинация, количество книг - 2, количество разворотов - 3</td>
                <td style={{ width: '60px' }}>888</td>
                <td style={{ width: '100px' }}>12.01.2024</td>
                <td style={{ width: '100px' }}>15.01.2024</td>
                <td style={{ width: '45px' }}>2кг</td>
                <td style={{ width: '110px' }}>00000000000</td>
                <td style={{ width: '160px' }}>Коммент</td>
            </tr>
        )
    }
    return (
        <div className="lkTableWrapper">
            <table className="lkTable">
                <tbody>
                    <tr>
                        <td style={{ width: '30px' }}>№</td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_active"></button></td>
                        <td style={{ width: '105px' }}>Статус</td>
                        <td style={{ width: '60px' }}>Готовность</td>
                        <td style={{ width: '75px' }}>Номер заказа</td>
                        <td style={{ width: '75px' }}>Связан с заказами</td>
                        <td style={{ width: '350px' }}>Описание</td>
                        <td style={{ width: '60px' }}>Цена</td>
                        <td style={{ width: '100px' }}>Дата оформления</td>
                        <td style={{ width: '100px' }}>Дата выполнения</td>
                        <td style={{ width: '45px' }}>Вес</td>
                        <td style={{ width: '110px' }}>Номер отправления</td>
                        <td style={{ width: '160px' }}>Коммент</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}