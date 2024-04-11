import '../style.css'
import Header from '../components/Header'
import InvoiceTableManualRefil from '../invoiceTables/InvoiceTableManualRefil'
import InvoiceTableBonusLog from '../invoiceTables/InvoiceTableBonusLog'
import InvoiceTableMoneyLog from '../invoiceTables/InvoiceTableMoneyLog'


export default function AdminInvoice() {


    return (
        <>
            <Header />
            <div className='wrapper_1200'>
                <InvoiceTableManualRefil/>
                <InvoiceTableMoneyLog />
                <InvoiceTableBonusLog />
            </div>
        </>
    )
}