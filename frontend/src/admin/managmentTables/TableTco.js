import '../style.css'

export default function TableTco() {

    function TableRow() {
        return (
                <tr>
                    <td style={{ width: '30px' }}><button class="tableButton tableButton_blueCheck"></button></td>
                    <td style={{ width: '30px' }}>1</td>
                    <td style={{ width: '30px' }}><button className='tableButton tableButton_greenButton' /></td>
                    <td style={{ width: '30px' }}>1</td>
                    <td style={{ width: '300px' }}>Натуральная ткань</td>
                    <td style={{ width: '80px' }}>Ткань</td>
                    <td style={{ width: '100px' }}>1, 2, 3, 4</td>
                    <td style={{ width: '60px' }}>25</td>
                    <td style={{ width: '60px' }}>-</td>
                    <td style={{ width: '60px', borderCollapse: 'collapse' }}><button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' /><button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' /></td>
                    <td style={{ width: '122px' }}>1111</td>
                    <td style={{ width: '120px' }}>2222</td>
                    <td style={{ width: '115px' }}>4444</td>
                    <td style={{ width: '60px' }}>Примечание</td>
                </tr>
        )
    }

    return (
        <div id="table5">
            <h3 class="tablesTitle">Тип обложки (TCO)</h3>
            <table id="table_tco">
                <tbody id="tco_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '300px' }}>Имя</td>
                        <td style={{ width: '80px' }}>Имя краткое</td>
                        <td style={{ width: '100px' }}>Признак доступности для формата</td>
                        <td style={{ width: '60px' }}>Множ-ль</td>
                        <td style={{ width: '60px' }}>Толщина</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '122px' }}>Текст 1</td>
                        <td style={{ width: '120px' }}>Текст 2</td>
                        <td style={{ width: '115px' }}>Текст 3</td>
                        <td style={{ width: '60px' }}>Прим.</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
