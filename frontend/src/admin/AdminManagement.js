import './style.css'
import Header from './components/Header'
import TableFor from './managmentTables/TableFor'
import TablePap from './managmentTables/TablePap'
import TableBas from './managmentTables/TableBas'
import TableTco from './managmentTables/TableTco'
import TableVar from './managmentTables/TableVar'
import TableNco from './managmentTables/TableNco'


export default function AdminManagement() {

    function TableRow() {
        return (
            <>
                <tr>
                    <td style={{ width: '30px' }}>
                        <button onclick="add_line('pro')"
                            className="tableButton tableButton_blueCheck">
                        </button>
                    </td>
                    <td style={{ width: '30px' }}>1</td>
                    <td style={{ width: '30px' }}>
                        <button onclick="add_line('pro')"
                            className="tableButton tableButton_redButton">
                        </button>
                    </td>
                    <td style={{ width: '300px' }}>Фотопечать Lay-Flat</td>
                    <td style={{ width: '100px' }}>Photo LF</td>
                    <td style={{ width: '50px' }}>22</td>
                    <td style={{ width: '60px' }}>
                        <button onclick="add_line('pro')"
                            className="tableButton tableButton_greyDowland">
                        </button>
                    </td>
                    <td style={{ width: '120px' }}>1111</td>
                    <td style={{ width: '120px' }}>2222</td>
                    <td style={{ width: '120px' }}>3333</td>
                    <td style={{ width: '240px' }}>Примечание</td>
                </tr>
            </>
        )
    }

    return (
        <>
            <Header />
            <div id="table1">
                <h3 className="tablesTitle">Продукты (PRO)</h3>
                <table id="table_pro">
                    <tbody id="pro_tbody">
                        <tr style={{ backgroundColor: '#ECECEC' }}>
                            <td style={{ width: '30px' }}><button onclick="add_line('pro')"
                                className="tableButton tableButton_greenPlus"
                                style={{ backgroundColor: '#ECECEC' }}>
                            </button>
                            </td>
                            <td style={{ width: '30px' }}>
                                <button onclick="del_pro_line()"
                                    className="tableButton tableButton_redTrash"
                                    style={{ backgroundColor: '#ECECEC' }}>
                                </button>
                            </td>
                            <td style={{ width: '30px' }}>Вкл</td>
                            <td style={{ width: '300px' }}>Имя</td>
                            <td style={{ width: '100px' }}>Имя крат.</td>
                            <td style={{ width: '50px' }}>Арт</td>
                            <td style={{ width: '60px' }}>IMG</td>
                            <td style={{ width: '120px' }}>Текст 1</td>
                            <td style={{ width: '120px' }}>Текст 2</td>
                            <td style={{ width: '120px' }}>Текст 3</td>
                            <td style={{ width: '240px' }}>Прим.</td>
                        </tr>
                        <TableRow />
                    </tbody>
                </table>
            </div >

            <h2 className="mainTitle">Фотопечать Lay-Flat</h2>

            <TableFor />
            <TablePap />
            <TableBas />
            <TableTco />
            <TableVar />
            <TableVar />
            <TableNco />
        </>
    )
}