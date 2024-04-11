import React, { useEffect, useState } from 'react';

const ModalAdmin = ({ isOpen, onClose, modalMode, modalUserId, modalUserName }) => {
    const [data, setData] = useState('');

    function modeToTitle(modalMode) {
        switch (modalMode) {
            case ('SupportHistory'):
                return 'История обращений'
            case ('Notebook'):
                return 'Блокнот'
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

            console.log('get')
            console.log(`/admin/users/?id=${modalUserId}&type=${lowerCaseMode}`)

            fetch(`/localFetch/adminUser${modalMode}${modalUserId}.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Ошибка запроса");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    setData(data[lowerCaseMode]);
                })
                .catch(error => {
                    console.error("Ошибка при обработке ответа:", error);
                });
        }
    }, [isOpen])

    const handleSave = () => {
        const lowerCaseMode = makeFirstLetterLowerCase(modalMode);
        console.log('put')
        console.log(`/admin/users/?id=${modalUserId}&type=${lowerCaseMode}`)
        const postData = {
            [lowerCaseMode]: data
        }
        console.log(postData);
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
                    <textarea
                        type="text"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <button onClick={handleSave}>Сохранить</button>
                </div>
            </div>
        )
    );
};

export default ModalAdmin;
