import '../style.css'
import Header from '../components/Header'
import InvoiceManualRefil from '../invoiceTables/InvoiceManualRefil'
import InvoiceTableLog from '../invoiceTables/InvoiceTableLog'
import { useEffect, useState } from 'react'


export default function AdminInvoice() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/localFetch/adminInvoice.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка запроса");
                }
                return response.json();
            })
            .then(data => {
                setData(data.invoice);
            })
            .catch(error => {
                console.error("Ошибка при обработке ответа:", error);
            });
    }, [])


    return (
        <>
            <Header />
            {data &&
                <div className='wrapper_1200'>
                    <p className="moneyText">
                        Деньги: Поступило всего: <span style={{ color: '#FF0000' }}> {data.money.earned}</span>.
                        Списано всего: <span style={{ color: '#62B01E' }}> {data.money.spent}</span>.
                        Баланс: <span style={{ color: '#00A3FF' }}> {data.money.earned - data.money.spent}</span>
                    </p>
                    <p className="moneyText">
                        Бонусы: Начислено всего: <span style={{ color: '#FF0000' }}> {data.bonus.earned}</span>.
                        Списано всего: <span style={{ color: '#62B01E' }}> {data.bonus.spent}</span>. Баланс:
                        <span style={{ color: '#00A3FF' }}> {data.bonus.earned - data.bonus.spent}</span>
                    </p>
                    <InvoiceManualRefil />
                    <div id="table13">
                        <h3 className="tablesTitle">Лог денежный</h3>
                        <InvoiceTableLog data={data.moneyLog} type='money'/>
                    </div>
                    <div id="table14">
                        <h3 className="tablesTitle">Лог бонусный</h3>
                        <InvoiceTableLog data={data.bonusLog} type='bonus'/>
                    </div>
                </div>}
        </>
    )
}