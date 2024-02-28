import '../style.css'

export default function InvoiceTableManualRefil() {

    return (
        <>
            <div id="table12">
                <p className="moneyText">
                    Деньги: Поступило всего: <span style={{ color: '#FF0000' }}>1500</span>.
                    Списано всего: <span style={{ color: '#62B01E' }}>1000</span>. Баланс:
                    <span style={{ color: '#00A3FF' }}>500</span>
                </p>
                <p className="moneyText">
                    Бонусы: Начислено всего: <span style={{ color: '#FF0000' }}>0</span>.
                    Списано всего: <span style={{ color: '#62B01E' }}>0</span>. Баланс:
                    <span style={{ color: '#00A3FF' }}>0</span>
                </p>
                <h3 className="tablesTitle">Таблица ручного пополнения</h3>
                <table>
                    <tbody>
                        <tr style={{ backgroundColor: '#ECECEC' }}>
                            <td style={{ width: '100px' }}>№ Телефона</td>
                            <td style={{ width: '300px' }}>Фамилия Имя Отчество</td>
                            <td style={{ width: '80px' }}>ID Юзера</td>
                            <td style={{ width: '100px' }}>Сумма</td>
                            <td style={{ width: '200px' }}>Основание</td>
                            <td style={{ width: '140px' }}>Коммент</td>
                            <td style={{ width: '100px' }}>Скрин</td>
                            <td style={{ width: '60px', fontSize: '10px', cursor: 'pointer' }} onclick="add_money()">Зачислить деньги</td>
                            <td style={{ width: '60px', fontSize: '10px', cursor: 'pointer' }} onclick="add_bonus()">Зачислить бонусы</td>
                            <td style={{ width: '60px', fontSize: '10px', cursor: 'pointer' }} onclick="take_money()">Списать деньги</td>
                        </tr>
                        <tr>
                            <td id="count_tel"></td>
                            <td id="u_name"></td>
                            <td id="u_id"></td>
                            <td id="u_sum"></td>
                            <td id="u_osn"></td>
                            <td id="u_cmnt"></td>
                            <td id="u_scrin"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}