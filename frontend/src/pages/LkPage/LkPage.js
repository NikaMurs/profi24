import LkUserTable from '../../components/LkUserTable/LkUserTable'
import './lkPage.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import deleteCookie from '../../functions/deleteCookie'
import { useEffect, useState } from 'react'
import formatPrice from '../../functions/formatPrice'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/userReducer'


export default function LkPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const [filters, setFilters] = useState('inWork');
    const [data, setData] = useState(null);
    const [orders, setOrders] = useState([]);
    const [selectedOrders, setSelectedOrders] = useState([]);

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
        dispatch(userActions.unsetUser())
        navigate('/')
    }

    useEffect(() => {
        fetch("./localFetch/userOrders.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка запроса");
                }
                return response.json();
            })
            .then(data => {
                setData(data.orders);
            })
            .catch(error => {
                console.error("Ошибка при обработке ответа:", error);
            });
    }, [])

    useEffect(() => {
        if (data) {
            if (filters === 'inWork') {
                setOrders(data.inWork)
            }
            if (filters === 'inPrint') {
                setOrders(data.inPrint)
            }
            if (filters === 'history') {
                setOrders(data.history)
            }
        }
    }, [filters, data])

    return (
        <>
            <main style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="lkTopContent">
                    <div className="lkTop">
                        <div className="lkTopLeft">
                            <div className="lkTopButtons">
                                <button className="lkButton" onClick={() => { navigate('/products') }}>Создать заказ</button>
                                <button className="lkButton" onClick={() => { setFilters('inWork') }}>В работе</button>
                                <button className="lkButton" onClick={() => { setFilters('inPrint') }}>В печати</button>
                                <button className="lkButton" onClick={() => { setFilters('history') }}>История</button>
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
                                <p>Бонусный счет: {formatPrice(user.bonus)} р.</p>
                                <p>При пополнении баланса, за каждые внесённые 25 000 рублей Вам будет начислятся 1% бонусов</p>
                            </div>
                            <div className="lkTopAccount">
                                <p>Лицевой счет: <span className="lkTopAccountMoney">{formatPrice(user.money)}</span> р.</p>
                                <button className="lkButtonDeposit">Пополнить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <LkUserTable filters={filters} orders={orders} selectedOrders={selectedOrders} setSelectedOrders={setSelectedOrders}/>
                <div className="lkFooter">
                    {filters !== 'inWork' ? <></> : (
                        <div className="lkFooterButtons">
                            <button className="lkButton">Связать</button>
                            <button className="lkButton">Отправить в печать</button>
                            <button className="lkButton">Удалить</button>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}