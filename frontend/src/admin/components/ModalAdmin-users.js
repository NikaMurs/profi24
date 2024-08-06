import React, { useEffect, useState } from 'react';
import getCookie from '../../functions/getCookie';

const ModalAdmin = ({ isOpen, onClose, modalMode, modalUserId, modalUserName }) => {
    const [data, setData] = useState('');

    function modeToTitle(modalMode) {
        switch (modalMode) {
            case ('SupportHistory'):
                return 'История обращений'
            case ('Notebook'):
                return 'Блокнот'
            case ('Info'):
                return 'Информация'
            default:
                return
        }
    }

    function makeFirstLetterLowerCase(str) {
        if (typeof str !== 'string' || str.length === 0) {
            return str;
        }
        return str.charAt(0).toLowerCase() + str.slice(1);
    }


    useEffect(() => {
        if (isOpen) {
            const lowerCaseMode = makeFirstLetterLowerCase(modalMode);

            if (getCookie('authorization')) {
                fetch(`${process.env.REACT_APP_URL}/admin/users/info/?id=${modalUserId}&type=${lowerCaseMode}`, {
                    headers: {
                        Authorization: `Bearer ${getCookie('authorization')}`,
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Ошибка запроса");
                        }
                        return response.json();
                    })
                    .then(data => {
                        setData(data[lowerCaseMode])
                    })
                    .catch(error => {
                        console.error("Ошибка при обработке ответа:", error);
                    });
            }
        }
    }, [isOpen])

    const handleSave = () => {
        const lowerCaseMode = makeFirstLetterLowerCase(modalMode);

        const postData = {
            id: modalUserId,
            updatedFields: {
                [lowerCaseMode]: data,
            }
        };

        if (getCookie('authorization')) {
            fetch(`${process.env.REACT_APP_URL}/admin/users`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${getCookie('authorization')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Ошибка запроса");
                    }
                    return response.json();
                })
                .then(data => {
                    onClose();
                })
                .catch(error => {
                    console.error("Ошибка при обработке ответа:", error);
                });
        }
    };

    const handleClose = () => {
        setData('');
        onClose();
    };

    return (
        isOpen && (
            <div className="modalAdmin">
                <div className="modalAdmin-content">
                    <span className="closeAdmin" onClick={handleClose}>&times;</span>
                    <h2>{`${modeToTitle(modalMode)} | ${modalUserName}`}</h2>
                    {modalMode !== 'Info' ?
                        <>
                            <textarea
                                type="text"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                            <button onClick={handleSave}>Сохранить</button>
                        </>
                        :
                        <>
                            <div className="modalAdmin-info"><span>Страна:</span> {data.country}</div>
                            <div className="modalAdmin-info"><span>Город:</span> {data.city}</div>
                            <div className="modalAdmin-info"><span>Улица:</span> {data.street}</div>
                            <div className="modalAdmin-info"><span>Профессия:</span> {data.profession}</div>
                            <div className="modalAdmin-info"><span>Количество книг:</span> {data.countBook}</div>
                            <div className="modalAdmin-info"><span>Сайт:</span> {data.site}</div>
                            <div className="modalAdmin-info"><span>Вк:</span> {data.vk}</div>
                            <div className="modalAdmin-info"><span>Телеграм:</span> {data.telegram}</div>
                            <div className="modalAdmin-info"><span>WhatsApp:</span> {data.whatsapp}</div>
                        </>}
                </div>
            </div>
        )
    );
};

export default ModalAdmin;
