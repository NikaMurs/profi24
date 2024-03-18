import '../style.css'

export default function TableDop({ data }) {

    function TableRow({ el, ind }) {
        return (
            <tr>
                <td style={{ width: '30px' }}><button className="tableButton tableButton_blueCheck" /></td>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                <td style={{ width: '30px' }}><button className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'} /></td>
                <td style={{ width: '30px' }}>{el.id}</td>
                <td style={{ width: '120px' }}>{el.title}</td>
                <td style={{ width: '80px' }}>{el.shortTitle}</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}>
                    <button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' />
                    <button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' />
                </td>
                <td style={{ width: '80px' }}>{el.price}</td>
                <td style={{ width: '120px' }}>{el.text1}</td>
                <td style={{ width: '120px' }}>{el.text2}</td>
                <td style={{ width: '120px' }}>{el.text3}</td>
                <td style={{ width: '380px' }}>{el.notes}</td>
            </tr>
        )
    }

    return (
        <div id="table7">
            <h3 className="tablesTitle">Таблица ДОПОЛНИТЕЛЬНО (DOP)</h3>
            <table id="table_dop">
                <tbody id="dop_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '120px' }}>Имя</td>
                        <td style={{ width: '80px' }}>Имя краткое</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '80px' }}>Цена</td>
                        <td style={{ width: '120px' }}>Текст 1</td>
                        <td style={{ width: '120px' }}>Текст 2</td>
                        <td style={{ width: '120px' }}>Текст 3</td>
                        <td style={{ width: '380px' }}>Прим.</td>
                    </tr>
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`dop_${el.id}`} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
