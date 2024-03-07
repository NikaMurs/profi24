import formatPrice from '../../functions/formatPrice'
import './lkUserTable.css'
import moment from 'moment'


export default function LkUserTable({ filters, orders, selectedOrders, setSelectedOrders }) {

    function getRowColor(filters) {
        let color = '#ffffff'
        if (filters === 'inWork') { color = '#f2f2f2' }
        if (filters === 'inPrint') { color = '#feffe7' }
        if (filters === 'history') { color = '#e2efd9' }

        return { backgroundColor: `${color}` }
    }

    function getStatusTextStyle(isMaster, isSlave) {
        let fontWeight = '500';
        let color = '#000000'
        if (isMaster) { fontWeight = 700 }
        if (isSlave) { color = '#0070c0' }
        return { width: '105px', fontWeight: `${fontWeight}`, color: `${color}` }
    }

    function handleButtonClick(description) {
        if (selectedOrders.includes(description)) {
            setSelectedOrders(selectedOrders.filter(order => order !== description));
        } else {
            setSelectedOrders([...selectedOrders, description]);
        }
    }

    function TableRow({ el, ind }) {
        return (
            <tr style={getRowColor(filters)}>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                {filters !== 'inWork' ? <></> :
                    <td style={{ width: '30px' }}>
                        <button className={`tableButton ${selectedOrders.includes(el.description) ? 'tableButton_active' : ''}`} style={getRowColor(filters)} onClick={(e) => {handleButtonClick(el.description)}} />
                    </td>}
                <td style={getStatusTextStyle(el.isMaster, el.isSlave)}>{el.statusText}</td>
                <td style={{ width: '60px' }}>{el.readyPersent}%</td>
                <td style={{ width: '75px' }}>{el.id}</td>
                <td style={{ width: '75px' }}>{el.linkedWithID}</td>
                <td style={{ width: '350px' }}>{el.description}</td>
                <td style={{ width: '60px' }}>{formatPrice(el.price)}</td>
                <td style={{ width: '100px' }}>{moment(el.dateStart).format('L')}</td>
                <td style={{ width: '100px' }}>{el.dateFinished === 0 ? '' : moment(el.dateFinished).format('L')}</td>
                <td style={{ width: '45px' }}>{el.weight === 0 ? '' : `${el.weight}кг`}</td>
                <td style={{ width: '110px' }}>{el.trackNumber}</td>
                <td style={{ width: '160px' }}>{el.comment}</td>
            </tr>
        )
    }
    return (
        <div className="lkTableWrapper">
            <table className="lkTable">
                <tbody>
                    <tr>
                        <td style={{ width: '30px' }}>№</td>
                        {filters !== 'inWork' ? <></> : <td style={{ width: '30px' }} className="tableButton tableButton_active"></td>}
                        <td style={{ width: '105px' }}>Статус</td>
                        <td style={{ width: '60px' }}>Готовность</td>
                        <td style={{ width: '75px' }}>Номер заказа</td>
                        <td style={{ width: '75px' }}>Связан с заказами</td>
                        <td style={{ width: '350px' }}>Описание</td>
                        <td style={{ width: '60px' }}>Цена</td>
                        <td style={{ width: '100px' }}>Дата оформления</td>
                        <td style={{ width: '100px' }}>Дата выполнения</td>
                        <td style={{ width: '45px' }}>Вес</td>
                        <td style={{ width: '110px' }}>Номер отправления</td>
                        <td style={{ width: '160px' }}>Коммент</td>
                    </tr>
                    {orders.length > 0
                        ?
                        orders.map((el, ind) => { return <TableRow el={el} ind={ind} key={el.uuid} /> })
                        :
                        <></>
                    }
                </tbody>
            </table>
        </div>
    )
}