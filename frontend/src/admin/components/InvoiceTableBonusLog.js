import '../style.css'

export default function InvoiceTableBonusLog() {

    function TableRow() {
        return (
            <tr>
                <td>1</td>
                <td>2024.02.12</td>
                <td>16:15:01</td>
                <td style={{ backgroundColor: '#FFCCCC' }}>100</td>
                <td style={{ backgroundColor: '#CCFFFF' }}>0</td>
                <td>М</td>
                <td>+79113159119</td>
                <td>1</td>
                <td>11111</td>
                <td>22222</td>
                <td>33333</td>
                <td>44444</td>
                <td>55555</td>
            </tr>
        )
    }

    return (
        <>
            <div id="table14">
                <h3 className="tablesTitle">Лог бонусный</h3>
                <table>
                    <tbody>
                        <tr style={{ backgroundColor: '#ECECEC' }}>
                            <td style={{ width: '100px' }}>ID Записи</td>
                            <td style={{ width: '80px' }}>Дата</td>
                            <td style={{ width: '80px' }}>Время</td>
                            <td style={{ width: '80px' }}>Приход</td>
                            <td style={{ width: '80px' }}>Расход</td>
                            <td style={{ width: '60px' }}>Способ</td>
                            <td style={{ width: '100px' }}>Телефон</td>
                            <td style={{ width: '80px' }}>Юзер</td>
                            <td style={{ width: '200px', fontSize: '10px' }}>Платеж, на основании
                                которого произошло зачисление</td>
                            <td style={{ width: '100px', fontSize: '12px' }}>Коммент при платеже</td>
                            <td style={{ width: '100px', fontSize: '12px' }}>Коммент мой</td>
                            <td style={{ width: '60px' }}></td>
                            <td style={{ width: '80px' }}></td>
                        </tr>
                        <TableRow />
                    </tbody>
                </table>
            </div>
        </>
    )
}