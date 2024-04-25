import '../style.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react';
import fetchTest from '../../functions/fetchTest';
import ModalAdmin from '../components/ModalAdmin-users';
import OrdersTable from '../components/OrdersTable';
import getCookie from '../../functions/getCookie';


export default function AdminOrders() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState(false);
    const [modalUserName, setModalUserName] = useState('');
    const [modalUserId, setModalUserId] = useState();
    const [userHistoryOrder, setUserHistoryOrder] = useState(false);
    const [userHistoryOrderName, setUserHistoryOrderName] = useState(false);


    useEffect(() => {
        fetchTest()
        fetch(`${process.env.REACT_APP_URL}/admin/users`, {
            headers: {
                Authorization: `Bearer ${getCookie('authorization')}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка запроса");
                }
                return response.json();
            })
            .then(data => {
                setUsers(data.users);
            })
            .catch(error => {
                console.error("Ошибка при обработке ответа:", error);
            });
    }, [])

    function TableRow({ user }) {

        function onClickOrderHistory(id, name) {
            console.log('get')
            console.log(`/admin/users/?id=${id}&type=orderHistory`)
            setUserHistoryOrder([]);
            setUserHistoryOrderName(name);
        }

        function onClickSupportHistory(id, name) {
            setIsModalOpen(true);
            setModalMode('SupportHistory');
            setModalUserId(id);
            setModalUserName(name);
        }

        function onClickNotebook(id, name) {
            setIsModalOpen(true);
            setModalMode('Notebook');
            setModalUserId(id);
            setModalUserName(name);
        }

        function onClickInfo(id, name) {
            setIsModalOpen(true);
            setModalMode('Info');
            setModalUserId(id);
            setModalUserName(name)
        }

        return (
            <tr>
                <td style={{ width: '60px' }}>{user.id}</td>
                <td style={{ width: '200px' }}>{user.fio}</td>
                <td style={{ width: '100px' }}>{user.phone}</td>
                <td style={{ width: '190px' }}>{user.mail}</td>
                <td style={{ width: '60px' }}>
                    <button className="tableButton tableButton_info" onClick={() => { onClickInfo(user.id, user.fio) }} />
                </td>
                <td style={{ width: '53px' }}>{user.country}</td>
                <td style={{ width: '150px' }}>{user.city}</td>
                <td style={{ width: '80px' }}>{user.balance}</td>
                <td style={{ width: '80px' }}>{user.deposited}</td>
                <td style={{ width: '80px' }}>{user.debited}</td>
                <td style={{ width: '80px' }}>{user.refund}</td>
                <td style={{ width: '80px' }}>{user.balanceBonus}</td>
                <td style={{ width: '80px' }}>{user.depositedBonus}</td>
                <td style={{ width: '80px' }}>{user.debitedBonus}</td>
                <td style={{ width: '80px' }}>{user.bonusStatus}</td>
                <td style={{ width: '80px' }}>{user.communicationRating}</td>
                <td style={{ width: '85px' }}>{user.pickinessRating}</td>
                <td style={{ width: '80px' }}>
                    <button className="tableButton tableButton_orderHistory" onClick={() => { onClickOrderHistory(user.id, user.fio) }} />
                </td>
                <td style={{ width: '88px' }}>
                    <button className="tableButton tableButton_supportHistory" onClick={() => { onClickSupportHistory(user.id, user.fio) }} />
                </td>
                <td style={{ width: '110px' }}>
                    <button className="tableButton tableButton_notebook" onClick={() => { onClickNotebook(user.id, user.fio) }} />
                </td>
                <td style={{ width: '70px' }}>{user.mistakesCount}</td>
            </tr>
        )
    }

    return (
        <>
            <Header />
            <div className='wrapper_2000'>
                <div>
                    <h3 className="tablesTitle">Юзеры 2000</h3>
                    <table>
                        <tbody>
                            <tr style={{ backgroundColor: '#ECECEC' }}>
                                <td style={{ width: '60px' }}>ID</td>
                                <td style={{ width: '200px' }}>Фамилия Имя Отчество</td>
                                <td style={{ width: '100px' }}>Телефон</td>
                                <td style={{ width: '190px' }}>Мэйл</td>
                                <td style={{ width: '60px' }}>Инфо</td>
                                <td style={{ width: '53px' }}>Страна</td>
                                <td style={{ width: '150px' }}>Город</td>
                                <td style={{ width: '80px' }}>Баланс Деньги</td>
                                <td style={{ width: '80px' }}>Внесено</td>
                                <td style={{ width: '80px' }}>Списано</td>
                                <td style={{ width: '80px' }}>Возврат</td>
                                <td style={{ width: '80px' }}>Баланс Бонусы</td>
                                <td style={{ width: '80px' }}>Зачислено</td>
                                <td style={{ width: '80px' }}>Списано</td>
                                <td style={{ width: '80px' }}>Бонусный Рейтинг</td>
                                <td style={{ width: '80px' }}>Рейтинг общения</td>
                                <td style={{ width: '85px', fontSize: '10px' }}>Рейтинг придирчивости</td>
                                <td style={{ width: '80px' }}>История заказов</td>
                                <td style={{ width: '88px' }}>История обращений</td>
                                <td style={{ width: '110px' }}>Коммент (блокнот)</td>
                                <td style={{ width: '70px' }}>Кол-во косяков</td>
                            </tr>

                            {users.map((user) => {
                                return <TableRow key={user.id} user={user} />
                            })}
                        </tbody>
                    </table>
                    {userHistoryOrderName ?
                        <div style={{ marginTop: '50px' }}>
                            <h3 className="tablesTitle">{userHistoryOrderName}</h3>
                            <OrdersTable />
                        </div>
                        :
                        <></>}
                </div>
            </div>
            <ModalAdmin
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                modalMode={modalMode}
                modalUserId={modalUserId}
                modalUserName={modalUserName}
            />
        </>
    )
}