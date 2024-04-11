import Header from '../components/Header'
import OrdersTable from '../components/OrdersTable'
import '../style.css'

export default function AdminOrders() {

    return (
        <>
            <Header />
            <div className='wrapper_2000'>

                <div>
                    <h3 className="tablesTitle">Заказы 2000</h3>
                    <OrdersTable />
                </div>
            </div>
        </>
    )
}