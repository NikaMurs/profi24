import '../style.css'

export default function TableTco({ data }) {

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
                <td style={{ width: '80px' }}>{el.shortTitle}</td>
                <td style={{ width: '100px' }}>{el.indicatorFormat}</td>
                <td style={{ width: '60px' }}>{el.multiplier}</td>
                <td style={{ width: '60px' }}>{el.width}</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}>
                    <button style={{ width: '50%' }} className='tableButton tableButton_greenCheck' />
                    <button style={{ width: '50%' }} className='tableButton tableButton_greyDowland' />
                </td>
                <td style={{ width: '122px' }}>{el.text1}</td>
                <td style={{ width: '120px' }}>{el.text2}</td>
                <td style={{ width: '115px' }}>{el.text3}</td>
                <td style={{ width: '60px' }}>{el.notes}</td>
            </tr>
        )
    }

    return (
        <div id="table5">
            <h3 className="tablesTitle">Тип обложки (TCO)</h3>
            <table id="table_tco">
                <tbody id="tco_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
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
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`tco_${el.id}`} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
