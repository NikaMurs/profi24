import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './lkEditPage.css';
import { useEffect } from 'react';
import getCookie from '../../functions/getCookie';
import jsonToUrlEncoded from '../../functions/jsonToUrlEncoded';

export default function LkEditPage() {
    const navigate = useNavigate();
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/lk/edit`, {
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
                setData(data.info);
            })
            .catch(error => {
                console.error("Ошибка при обработке ответа:", error);
            });
    }, [])

    function onChange(e) {
        const newData = { ...data, [e.target.id]: e.target.value };
        setData(newData);
    }

    function handleCountBookChange(e) {
        const input = e.target.value;
        // Регулярное выражение, позволяющее оставить только числа в строке
        const regex = /^[0-9]*$/;
        if (regex.test(input)) {
            onChange(e);
        }
    }

    function handleOnSave(e) {
        console.log(data)

        // fetch(`${process.env.REACT_APP_URL}/lk/edit`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${getCookie('authorization')}`
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Ошибка соединения');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         navigate('/lk')
        //     })
        //     .catch(error => {
        //         console.error('There was an error!', error);
        //         alert('Произошла ошибка')
        //     });
        // e.preventDefault()
    }

    return (
        <form className="lkEditForm">
            <div className="lkEditColumn">
                <h2 className='lkEditTitle'>Адрес</h2>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="country">Страна</label>
                    <input className="lkEditFormInput" type="text" name="country" id="country" value={data?.country} onChange={onChange} />
                </div>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="city">Город</label>
                    <input className="lkEditFormInput" type="text" name="city" id="city" value={data?.city} onChange={onChange} />
                </div>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="street">Улица, номер дома</label>
                    <input className="lkEditFormInput" type="text" name="street" id="street" value={data?.street} onChange={onChange} />
                </div>

                <h2 className='lkEditTitle'>Инфо</h2>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="profession">Род деятельности</label>
                    <input className="lkEditFormInput" type="text" name="profession" id="profession" value={data?.profession} onChange={onChange} />
                </div>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="countBook">Сколько книг в год?</label>
                    <input className="lkEditFormInput" type="text" name="countBook" id="countBook" value={data?.countBook} onChange={handleCountBookChange} />
                </div>
            </div>
            <div className="lkEditColumn">
                <h2 className='lkEditTitle'>Связь</h2>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="site">Сайт</label>
                    <input className="lkEditFormInput" type="text" name="site" id="site" value={data?.site} onChange={onChange} />
                </div>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="vk">Вк</label>
                    <input className="lkEditFormInput" type="text" name="vk" id="vk" value={data?.vk} onChange={onChange} />
                </div>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="telegram">Telegram</label>
                    <input className="lkEditFormInput" type="text" name="telegram" id="telegram" value={data?.telegram} onChange={onChange} />
                </div>
                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="whatsapp">WhatsApp</label>
                    <input className="lkEditFormInput" type="text" name="whatsapp" id="whatsapp" value={data?.whatsapp} onChange={onChange} />
                </div>
                <button onClick={handleOnSave} className="lkEditSave">Сохранить</button>
            </div>
        </form>
    );
}
