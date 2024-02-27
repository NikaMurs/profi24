import './style.css'
import Header from './components/Header'


export default function AdminOrders() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '30px' }}>
                    <button className="tableButton tableButton_greenCheck" style={{ backgroundColor: '#ECECEC' }}></button>
                </td>
                <td style={{ width: '60px' }}>1</td>
                <td style={{ width: '200px' }}>Вахренев Аким Андреевич</td>
                <td style={{ width: '100px' }}>+79113159119</td>
                <td style={{ width: '190px' }}>akeem3159119@gmail.com</td>
                <td style={{ width: '30px' }}>
                    <button className="tableButton tableButton_tg" style={{ backgroundColor: '#ECECEC' }}>tg</button>
                </td>
                <td style={{ width: '30px' }}>
                    <button className="tableButton tableButton_wa" style={{ backgroundColor: '#ECECEC' }}>wa</button>
                </td>
                <td style={{ width: '53px' }}>Россия</td>
                <td style={{ width: '150px' }}>Кудрово</td>
                <td style={{ width: '80px' }}>0</td>
                <td style={{ width: '80px' }}>1</td>
                <td style={{ width: '80px' }}>2</td>
                <td style={{ width: '80px' }}>3</td>
                <td style={{ width: '80px' }}>4</td>
                <td style={{ width: '80px' }}>5</td>
                <td style={{ width: '80px' }}>6</td>
                <td style={{ width: '80px' }}>7</td>
                <td style={{ width: '80px' }}>8</td>
                <td style={{ width: '80px', fontSize: '10px' }}>9</td>
                <td style={{ width: '80px' }}>10</td>
                <td style={{ width: '88px' }}>11</td>
                <td style={{ width: '115px' }}>12</td>
                <td style={{ width: '70px' }}>13</td>
            </tr>
        )
    }

    return (
        <>
            <Header />
            <div>
                <h3 className="tablesTitle">Юзеры 2000</h3>
                <table>
                    <tbody>
                        <tr style={{ backgroundColor: '#ECECEC' }}>
                            <td style={{ width: '30px' }}>
                                <button className="tableButton tableButton_greenCheck" style={{ backgroundColor: '#ECECEC' }}></button>
                            </td>
                            <td style={{ width: '60px' }}>ID</td>
                            <td style={{ width: '200px' }}>Фамилия Имя Отчество</td>
                            <td style={{ width: '100px' }}>Телефон</td>
                            <td style={{ width: '190px' }}>Мэйл</td>
                            <td style={{ width: '30px' }}>
                                <button className="tableButton tableButton_tg" style={{ backgroundColor: '#ECECEC' }}></button>
                            </td>
                            <td style={{ width: '30px' }}>
                                <button className="tableButton tableButton_wa" style={{ backgroundColor: '#ECECEC' }}></button>
                            </td>
                            <td style={{ width: '53px' }}>Страна</td>
                            <td style={{ width: '150px' }}>Город</td>
                            <td style={{ width: '80px' }}>Баланс Деньги</td>
                            <td style={{ width: '80px' }}>Внесено</td>
                            <td style={{ width: '80px' }}>Списано</td>
                            <td style={{ width: '80px' }}>Баланс Бонусы</td>
                            <td style={{ width: '80px' }}>Зачислено</td>
                            <td style={{ width: '80px' }}>Списано</td>
                            <td style={{ width: '80px' }}>Возврат</td>
                            <td style={{ width: '80px' }}>Бонусный Рейтинг</td>
                            <td style={{ width: '80px' }}>Рейтинг общения</td>
                            <td style={{ width: '80px', fontSize: '10px' }}>Рейтинг придирчивости</td>
                            <td style={{ width: '80px' }}>История заказов</td>
                            <td style={{ width: '88px' }}>История обращений</td>
                            <td style={{ width: '115px' }}>Коммент (блокнот)</td>
                            <td style={{ width: '70px' }}>Кол-во косяков</td>
                        </tr>
                        <TableRow />
                    </tbody>
                </table>
            </div>
        </>
    )
}