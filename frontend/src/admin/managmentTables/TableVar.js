import '../style.css'

export default function TableVar() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '30px' }}><button class="tableButton tableButton_blueCheck"></button></td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '30px' }}><button className='tableButton tableButton_greenButton' /></td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '200px' }}>УФ-лак</td>
                <td style={{ width: '80px' }}>Лак</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}><button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' /><button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' /></td>
                <td style={{ width: '120px' }}>1111</td>
                <td style={{ width: '120px' }}>2222</td>
                <td style={{ width: '120px' }}>3333</td>
                <td style={{ width: '380px' }}>Примечание</td>
            </tr>
        )
    }

    return (
        <div id="table6">
            <h3 class="tablesTitle">Варианты обложки (VAR-01)</h3>
            <table id="table_var01">
                <tbody id="var01_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '200px' }}>Имя</td>
                        <td style={{ width: '80px' }}>Имя краткое</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '120px' }}>Текст 1</td>
                        <td style={{ width: '120px' }}>Текст 2</td>
                        <td style={{ width: '120px' }}>Текст 3</td>
                        <td style={{ width: '380px' }}>Прим.</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
