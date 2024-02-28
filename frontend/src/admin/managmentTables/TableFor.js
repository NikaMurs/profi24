import '../style.css'

export default function TableFor() {

    function TableRow() {
        return (
            <tr>
                <td style={{ width: '30px' }}><button class="tableButton tableButton_blueCheck"></button>
                </td>
                <td style={{ width: '30px' }}>1</td>
                <td style={{ width: '30px' }}><button className='tableButton tableButton_greenButton' /></td>
                <td style={{ width: '60px' }}>1</td>
                <td style={{ width: '60px' }}>20x20</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}><button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' /><button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' /></td>
                <td style={{ width: '60px' }}>75</td>
                <td style={{ width: '62px' }}>10</td>
                <td style={{ width: '31px' }}><button className='tableButton tableButton_greenCheck' /></td>
                <td style={{ width: '121px' }}>20x20</td>
                <td style={{ width: '120px' }}>Т2</td>
                <td style={{ width: '120px' }}>Т3</td>
                <td style={{ width: '100px' }}>4800x2400</td>
                <td style={{ width: '317px' }}>Примечание</td>
            </tr>
        )
    }

    return (
        <div id="table2">
            <h3 class="tablesTitle">Формат (FOR)</h3>
            <table id="table_forr">
                <tbody id="forr_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_greenPlus" onclick="add_line('forr')" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button class="tableButton tableButton_redTrash" onclick="del_line('forr')" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '60px' }}>Арт</td>
                        <td style={{ width: '60px' }}>Имя</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '60px' }}>Цена бумаги</td>
                        <td style={{ width: '62px' }}>Базовая цена</td>
                        <td style={{ width: '31px' }}>Нап</td>
                        <td style={{ width: '121px' }}>Текст 1<br />
                            (Над картинкой)</td>
                        <td style={{ width: '120px' }}>Текст 2
                            (Значение)</td>
                        <td style={{ width: '120px' }}>Текст 3 (Параметры)</td>
                        <td style={{ width: '100px' }}>Целевой размер</td>
                        <td style={{ width: '317px' }}>Прим.</td>
                    </tr>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
