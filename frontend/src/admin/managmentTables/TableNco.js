import '../style.css'

export default function TableNco({ data }) {

    function TableRow({ el, ind }) {
        return (
            <tr>
                <td style={{ width: '30px' }}><button className="tableButton tableButton_blueCheck" /></td>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                <td style={{ width: '30px' }}><button className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'} /></td>
                <td style={{ width: '30px' }}>{el.id}</td>
                <td style={{ width: '80px' }}>{el.format}</td>
                <td style={{ width: '60px' }}>{el.width}</td>
                <td style={{ width: '110px' }}>{el.size}</td>
                <td style={{ width: '70px' }}>{el.weight}</td>
                <td style={{ width: '710px' }}>{el.url}</td>
            </tr>
        )
    }

    return (
        <div id="table8">
            <h3 className="tablesTitle">Таблица напраляющих для обложек (NCO)</h3>
            <table id="table_nco">
                <tbody id="nco_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '80px' }}>Формат</td>
                        <td style={{ width: '60px' }}>Толщ. блока</td>
                        <td style={{ width: '110px' }}>Целевой раз-р</td>
                        <td style={{ width: '70px' }}>Вес</td>
                        <td style={{ width: '710px' }}>Направляющие</td>
                    </tr>
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`nco_${el.id}`} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
