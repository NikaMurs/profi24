import './style.css'
import Header from './components/Header'
import InvoiceTableManualRefil from './components/InvoiceTableManualRefil'
import InvoiceTableMoneyLog from './components/InvoiceTableMoneyLog'
import InvoiceTableBonusLog from './components/InvoiceTableBonusLog'


export default function AdminInvoice() {


    return (
        <>
            <Header />
            <InvoiceTableManualRefil />
            <InvoiceTableMoneyLog />
            <InvoiceTableBonusLog />
        </>
    )
}