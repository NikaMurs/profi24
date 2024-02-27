import '../style.css'

export default function InvoiceTableMoneyLog() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '100px' }}>1</td>
                <td style={{ width: '80px' }}>2024.02.12</td>
                <td style={{ width: '80px' }}>16:15:01</td>
                <td style={{ width: '80px', backgroundColor: '#FFCCCC' }}>1000</td>
                <td style={{ width: '80px', backgroundColor: '#CCFFFF'  }}>0</td>
                <td style={{ width: '60px' }}>М</td>
                <td style={{ width: '100px' }}>+79113159119</td>
                <td style={{ width: '80px' }}>1</td>
                <td style={{ width: '200px' }}>1111</td>
                <td style={{ width: '100px', fontSize: '12px' }}>2222</td>
                <td style={{ width: '100px', fontSize: '12px' }}>3333</td>
                <td style={{ width: '60px' }}></td>
                <td style={{ width: '80px' }}></td>
            </tr>
        )
    }

    return (
        <>
            <div id="table13">
                <h3 className="tablesTitle">Лог денежный</h3>
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
                            <td style={{ width: '200px' }}>Инфа от банка</td>
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