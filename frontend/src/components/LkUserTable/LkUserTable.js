import LkUserTableRow from './LkUserTableRow'
import './lkUserTable.css'

export default function LkUserTable() {

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
                    <LkUserTableRow />
                </tbody>
            </table>
        </div>
    )
}