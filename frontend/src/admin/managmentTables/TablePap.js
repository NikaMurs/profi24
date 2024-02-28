import '../style.css'

export default function TablePap() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '30px' }}><button class="tableButton tableButton_blueCheck"></button>
                </td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '30px' }}><button className='tableButton tableButton_greenButton' /></td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '300px' }}>Глянцевая Fuji Gloss</td>
                <td style={{ width: '100px' }}>Fuji Gloss</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}><button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' /><button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' /></td>
                <td style={{ width: '60px' }}>0.12</td>
                <td style={{ width: '122px' }}>Fuji глянец</td>
                <td style={{ width: '120px' }}>n2</td>
                <td style={{ width: '120px' }}>n3</td>
                <td style={{ width: '198px' }}>Примечание</td>
            </tr>
        )
    }

    return (
        <div id="table3">
            <h3 class="tablesTitle">Бумага (PAP)</h3>
            <table id="table_pap">
                <tbody id="pap_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '300px' }}>Имя</td>
                        <td style={{ width: '100px' }}>Крат. имя</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '60px' }}>Толщ.</td>
                        <td style={{ width: '122px' }}>Текст 1<br />(Над картинкой)</td>
                        <td style={{ width: '120px' }}>Текст 2 (Значение)</td>
                        <td style={{ width: '120px' }}>Текст 3 (Параметры)</td>
                        <td style={{ width: '198px' }}>Прим.</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
