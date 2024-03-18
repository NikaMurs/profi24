import '../style.css'

export default function TablePap({ data }) {

    function TableRow({ el, ind }) {
        return (
            <tr>
                <td style={{ width: '30px' }}>
                    <button className="tableButton tableButton_blueCheck" />
                </td>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                <td style={{ width: '30px' }}><button className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'} /></td>
                <td style={{ width: '30px' }}>{el.id}</td>
                <td style={{ width: '300px' }}>{el.title}</td>
                <td style={{ width: '100px' }}>{el.shortTitle}</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}>
                    <button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' />
                    <button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' />
                </td>
                <td style={{ width: '60px' }}>{el.width}</td>
                <td style={{ width: '122px' }}>{el.text1}</td>
                <td style={{ width: '120px' }}>{el.text2}</td>
                <td style={{ width: '120px' }}>{el.text3}</td>
                <td style={{ width: '198px' }}>{el.notes}</td>
            </tr>
        )
    }

    return (
        <div id="table3">
            <h3 className="tablesTitle">Бумага (PAP)</h3>
            <table id="table_pap">
                <tbody id="pap_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }}></button>
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
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind}  key={`pap_${el.id}`}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}
