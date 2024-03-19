import '../style.css'

export default function TableFor({ data }) {
    function TableRow({ el, ind }) {
        return (
            <tr>
                <td style={{ width: '30px' }}><button className="tableButton" /></td>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                <td style={{ width: '30px' }}><button className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'} /></td>
                <td style={{ width: '60px' }}>{el.id}</td>
                <td style={{ width: '60px' }}>{el.title}</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}>
                    <button style={{ width: '50%' }} className={el.img ? 'tableButton tableButton_greenCheck' : 'tableButton tableButton_greyDowland'}/>
                </td>
                <td style={{ width: '60px' }}>{el.price}</td>
                <td style={{ width: '62px' }}>{el.basePrice}</td>
                <td style={{ width: '31px' }}>
                    <button className='tableButton tableButton_greenCheck' />
                </td>
                <td style={{ width: '121px' }}>{el.text1}</td>
                <td style={{ width: '120px' }}>{el.text2}</td>
                <td style={{ width: '120px' }}>{el.text3}</td>
                <td style={{ width: '100px' }}>{el.size}</td>
                <td style={{ width: '317px' }}>{el.notes}</td>
            </tr>
        )
    }

    return (
        <div id="table2">
            <h3 className="tablesTitle">Формат (FOR)</h3>
            <table id="table_forr">
                <tbody id="forr_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }}></button>
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
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`for_${el.id}`} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
