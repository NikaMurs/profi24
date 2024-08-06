import { useState } from 'react';
import '../style.css'
import formatPhoneNumber from '../../functions/formatPhoneNumber';
import ModalAdmin from '../components/ModalAdmin-Refil';

export default function InvoiceManualRefil() {
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState('');

    function onChangeSearch(e) {
        let { value } = e.target;

        let formattedPhoneNumber = value.replace(/[^\d+]/g, '');
        if (value.includes('+')) {
            formattedPhoneNumber = formattedPhoneNumber.substring(0, 12);
        } else {
            formattedPhoneNumber = formattedPhoneNumber.substring(0, 11);
        }

        setSearch(formattedPhoneNumber)
    }

    function onClick() {
        console.log(`GET ЗАПРОС /searchUser/?phone=${formatPhoneNumber(search)}`)

        fetch(`/localFetch/refilUserInfo.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка запроса");
                }
                return response.json();
            })
            .then(data => {
                setUserInfo(data.userInfo);
            })
            .catch(error => {
                console.error("Ошибка при обработке ответа:", error);
            });

        if (true){
            setIsModalOpen(true);
        } else {
            alert('Пользователь не найден!')
        }
    }

    return (
        <>
            <div id="table12" style={{ marginTop: '18px' }}>
                <h3 className="tablesTitle">Ручное пополнения</h3>
                <div className="search-bar">
                    <input type="text" placeholder="№ Телефона" value={search} onChange={onChangeSearch} />
                    <button onClick={onClick}>Поиск</button>
                </div>
            </div>
            <ModalAdmin isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userInfo={userInfo}/>
        </>
    )
}