import '../style.css'

export default function TableBas() {

    function TableRow() {
        return (
                <tr>
                    <td style={{ width: '30px' }}><button class="tableButton tableButton_blueCheck"></button></td>
                    <td style={{ width: '30px' }}>1</td>
                    <td style={{ width: '30px' }}><button className='tableButton tableButton_greenButton' /></td>
                    <td style={{ width: '30px' }}>1</td>
                    <td style={{ width: '100px' }}>Без основы</td>
                    <td style={{ width: '60px', borderCollapse: 'collapse' }}><button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' /><button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' /></td>
                    <td style={{ width: '80px' }}>0.01</td>
                    <td style={{ width: '55px' }}>0.25</td>
                    <td style={{ width: '55px' }}>1</td>
                    <td style={{ width: '60px' }}>30</td>
                    <td style={{ width: '122px' }}>Без основы</td>
                    <td style={{ width: '120px' }}>1111</td>
                    <td style={{ width: '115px' }}>2222</td>
                    <td style={{ width: '313px' }}>Примечание</td>
                </tr>
        )
    }

    return (
        <div id="table4">
            <h3 class="tablesTitle">Основа страниц (BAS)</h3>
            <table id="table_bas">
                <tbody id="bas_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '100px' }}>Имя</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '80px' }}>Толщина</td>
                        <td style={{ width: '55px' }}>Вес</td>
                        <td style={{ width: '55px' }}>Цена</td>
                        <td style={{ width: '60px' }}>Макс. Кол-во</td>
                        <td style={{ width: '122px' }}>Текст 1<br />(Над картинкой)</td>
                        <td style={{ width: '120px' }}>Текст 2 (Значение)</td>
                        <td style={{ width: '115px' }}>Текст 3 (Параметры)</td>
                        <td style={{ width: '313px' }}>Прим.</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
