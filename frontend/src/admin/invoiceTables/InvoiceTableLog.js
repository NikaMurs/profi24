import '../style.css'
import moment from 'moment'

export default function InvoiceTableLog({ data, type }) {

    function TableRow({el}) {
        return (
            <tr>
                <td style={{ width: '100px' }}>{el.id}</td>
                <td style={{ width: '80px' }}>{moment(el.date).format('L')}</td>
                <td style={{ width: '80px' }}>{moment(el.date).format('LTS')}</td>
                <td style={{ width: '80px', backgroundColor: '#FFCCCC' }}>{el.earned}</td>
                <td style={{ width: '80px', backgroundColor: '#CCFFFF' }}>{el.spent}</td>
                <td style={{ width: '60px' }}>{el.method}</td>
                <td style={{ width: '100px' }}>{el.phone}</td>
                <td style={{ width: '80px' }}>{el.userId}</td>
                <td style={{ width: '200px' }}>{el.info}</td>
                <td style={{ width: '100px', fontSize: '12px' }}>{el.comment}</td>
            </tr>
        )
    }

    return (
        <>

            <table>
                <tbody>
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '100px' }}>ID Записи</td>
                        <td style={{ width: '80px' }}>Дата</td>
                        <td style={{ width: '80px' }}>Время</td>
                        <td style={{ width: '80px' }}>Приход</td>
                        <td style={{ width: '80px' }}>Расход</td>
                        <td style={{ width: '60px' }}>Способ</td>
                        <td style={{ width: '100px' }}>Телефон</td>
                        <td style={{ width: '80px' }}>Юзер</td>
                        <td style={{ width: '200px' }}>Инфо</td>
                        <td style={{ width: '100px', fontSize: '12px' }}>Коммент мой</td>
                    </tr>
                    {data.map((el) => {
                        return <TableRow el={el} key={`${type}-${el.id}`}/>
                    })}
                </tbody>
            </table>
        </>
    )
}