import LkUserTable from '../../components/LkUserTable/LkUserTable'
import './lkPage.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import deleteCookie from '../../functions/deleteCookie'

export default function LkPage() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function getBonusStatusText(status) {
        switch (status) {
            case 'bronze':
                return 'Бронзовый'
            case 'silver':
                return 'Серебряный'
            case 'gold':
                return 'Золотой'
            default:
                return 'Бронзовый'
        }
    }

    function handleClickLogout() {
        deleteCookie('isUserLoged');
        navigate('/')
    }

    return (
        <>
            <main style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="lkTopContent">
                    <div className="lkTop">
                        <div className="lkTopLeft">
                            <div className="lkTopButtons">
                                <button className="lkButton" onClick={()=>{navigate('/products')}}>Создать заказ</button>
                                <button className="lkButton">Активные заказы</button>
                                <button className="lkButton">Завершённые заказы</button>
                            </div>
                        </div>
                        <div className="lkTopRight">
                            <div className="lkTopLogOut">
                                <button onClick={handleClickLogout}>Выход</button>
                            </div>
                            <div className="lkTopUser">
                                <h2>{`${user.name} ${user.surname}`}</h2>
                                <div className="lkTopUserMedal"></div>
                                <p>Бонусный рейтинг: <span className="lkTopUserStatus">{getBonusStatusText(user.bonusStatus)}</span></p>
                                <p>Бонусный счет: {formatNumber(user.bonus)} р.</p>
                                <p>При пополнении баланса, за каждые внесённые 25 000 рублей Вам будет начислятся 1% бонусов</p>
                            </div>
                            <div className="lkTopAccount">
                                <p>Лицевой счет: <span className="lkTopAccountMoney">{formatNumber(user.money)}</span> р.</p>
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