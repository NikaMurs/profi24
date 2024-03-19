import '../style.css'

export default function TableBas({ data }) {

    function TableRow({ el, ind }) {
        return (
            <tr>
                <td style={{ width: '30px' }}><button className="tableButton tableButton_blueCheck"></button></td>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                <td style={{ width: '30px' }}><button className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'} /></td>
                <td style={{ width: '30px' }}>{el.id}</td>
                <td style={{ width: '100px' }}>{el.title}</td>
                <td style={{ width: '60px', borderCollapse: 'collapse' }}>
                    <button style={{ width: '50%' }} className={el.img ? 'tableButton tableButton_greenCheck' : 'tableButton tableButton_greyDowland'} />
                </td>
                <td style={{ width: '80px' }}>{el.width}</td>
                <td style={{ width: '55px' }}>{el.weight}</td>
                <td style={{ width: '55px' }}>{el.price}</td>
                <td style={{ width: '60px' }}>{el.maxCount}</td>
                <td style={{ width: '122px' }}>{el.text1}</td>
                <td style={{ width: '120px' }}>{el.text2}</td>
                <td style={{ width: '115px' }}>{el.text3}</td>
                <td style={{ width: '313px' }}>{el.notes}</td>
            </tr>
        )
    }

    return (
        <div id="table4">
            <h3 className="tablesTitle">Основа страниц (BAS)</h3>
            <table id="table_bas">
                <tbody id="bas_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_greenPlus" style={{ backgroundColor: '#ECECEC' }}></button>
                        </td>
                        <td style={{ width: '30px' }}><button className="tableButton tableButton_redTrash" style={{ backgroundColor: '#ECECEC' }} ></button>
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
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`bas_${el.id}`} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
