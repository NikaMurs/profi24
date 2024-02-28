import '../style.css'

export default function TableNco() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '30px' }}><button class="tableButton tableButton_blueCheck"></button></td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '30px' }}><button className='tableButton tableButton_greenButton' /></td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '80px' }}>20x20</td>
                <td style={{ width: '60px' }}>6</td>
                <td style={{ width: '110px' }}>5551х2953</td>
                <td style={{ width: '70px' }}>-</td>
                <td style={{ width: '710px' }}>https://disk.yandex.ru/i/Ewng0SmKlBmHPw</td>
            </tr>
        )
    }

    return (
        <div id="table9">
            <h3 class="tablesTitle">Таблица напраляющих для обложек (NCO)</h3>
            <table id="table_nco">
                <tbody id="nco_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '80px' }}>Формат</td>
                        <td style={{ width: '60px' }}>Толщ. блока</td>
                        <td style={{ width: '110px' }}>Целевой раз-р</td>
                        <td style={{ width: '70px' }}>Вес</td>
                        <td style={{ width: '710px' }}>Направляющие</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
