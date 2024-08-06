import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';

export default function ModalAdmin({ isOpen, onClose, userInfo }) {
    const [summ, setSumm] = useState();
    const [comment, setComment] = useState();


    const handleClose = () => {
        setSumm()
        setComment()
        onClose();
    };

    function onChangeSumm(e) {
        let { value } = e.target;
        let money = value.replace(/[^\d+]/g, '');
        setSumm(money)
    }

    function onSubmit(type){
        const postData={
            userID: userInfo.id,
            type: type,
            amount: summ,
            comment: comment,
        }

        console.log(postData)
        handleClose()
    }

    return (
        isOpen && (
            <div className="modalAdmin">
                <div className="modalAdmin-content">
                    <span className="closeAdmin" onClick={handleClose}>&times;</span>
                    <h2>{`Ручное пополнение | ${userInfo.name}`}</h2>

                    <div className="modalAdmin-info"><span>№ Телефона:</span> {userInfo.phone}</div>
                    <div className="modalAdmin-info"><span>ID Юзера:</span> {userInfo.id}</div>
                    <div className="modalAdmin-info"><span>Текщий баланс:</span> {userInfo.balance}</div>
                    <div className="modalAdmin-info"><span>Текущий баланс бонусов:</span> {userInfo.balanceBonus}</div>

                    <div style={{ backgroundColor: '#888888', height: '1px', margin: '10px' }}></div>

                    <div className="modalAdmin-info">
                        <span>Сумма: </span>
                        <input type="text" placeholder="Введите сумму" value={summ} onChange={onChangeSumm} />
                    </div>
                    <div className="modalAdmin-info">
                        <span>Комментарий: </span>
                        <input style={{ width: '100%', boxSizing: 'border-box', marginTop: '10px' }} type="text" placeholder="Введите комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>

                    <div style={{ backgroundColor: '#888888', height: '1px', margin: '10px' }}></div>

                    <div className='modalAdmin-buttons'>
                        <button onClick={()=>onSubmit('addMoney')}>Зачислить деньги</button>
                        <button onClick={()=>onSubmit('addBonus')}>Зачислить бонусы</button>
                    </div>

                    <div className='modalAdmin-buttons'>
                        <button onClick={()=>onSubmit('removeMoney')} className='redButton'>Списать деньги</button>
                        <button onClick={()=>onSubmit('removeBonus')} className='redButton'>Списать бонусы</button>
                    </div>


                </div>
            </div>
        )
    );
}