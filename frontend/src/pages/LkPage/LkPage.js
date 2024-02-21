import LkUserTable from '../../components/LkUserTable/LkUserTable'
import './lkPage.css'
export default function LkPage() {

    return (
        <>
            <main style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="lkTopContent">
                    <div className="lkTop">
                        <div className="lkTopLeft">
                            <div className="lkTopButtons">
                                <button className="lkButton">Создать заказ</button>
                                <button className="lkButton">Активные заказы</button>
                                <button className="lkButton">Завершённые заказы</button>
                            </div>
                        </div>
                        <div className="lkTopRight">
                            <div className="lkTopLogOut">
                                <button>Выход</button>
                            </div>
                            <div className="lkTopUser">
                                <h2>User</h2>
                                <div className="lkTopUserMedal"></div>
                                <p>Бонусный рейтинг: <span className="lkTopUserStatus">Бронзовый</span></p>
                                <p>Бонусный счет: ___БОНУСНЫЙ СЧЕТ___ р.</p>
                                <p>При пополнении баланса, за каждые внесённые 25000 рублей Вам будет начислятся 1% бонусов</p>
                            </div>
                            <div className="lkTopAccount">
                                <p>Лицевой счет: <span className="lkTopAccountMoney">___БАЛАНС СЧЕТА___</span> р.</p>
                                <button className="lkButtonDeposit">Пополнить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <LkUserTable />
                <div className="lkFooter">
                    <div className="lkFooterButtons">
                        <button className="lkButton">Связать</button>
                        <button className="lkButton">Отправить в печать</button>
                        <button className="lkButton">Удалить</button>
                    </div>
                    <div className="lkFooterContent">
                        <p>Удалять можно только то, что ещё не отправлено в печать</p>
                    </div>
                </div>
            </main>
        </>
    )
}