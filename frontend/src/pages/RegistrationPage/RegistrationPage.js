import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './registrationPage.css'
import formatPhoneNumber from '../../functions/formatPhoneNumber';

export default function RegistrationPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        secondname: '',
        telephone: '',
        mail: '',
        password: '',
        c_password: ''
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePasswordsMatch(password, confirmPassword) {
        return password === confirmPassword;
    }


    function onChangePhone(e) {
        let { name, value } = e.target;

        let formattedPhoneNumber = value.replace(/[^\d+]/g, '');
        if (value.includes('+')) {
            formattedPhoneNumber = formattedPhoneNumber.substring(0, 12);
        } else {
            formattedPhoneNumber = formattedPhoneNumber.substring(0, 11);
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: formattedPhoneNumber
        }));
    }

    function onChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function onSumbit(e) {
        e.preventDefault();

        const postData = {
            first_name: formData.surname,
            name: formData.name,
            second_name: formData.secondname,
            telephone: formatPhoneNumber(formData.telephone),
            email: validateEmail(formData.mail) ? formData.mail : false,
            hashed_password: validatePasswordsMatch(formData.password, formData.c_password) ? formData.password : false,
        };

        if (postData.first_name === '') { alert('Вы не заполнили поле: Фамилия'); return };
        if (postData.name === '') { alert('Вы не заполнили поле: Имя'); return };
        if (postData.second_name === '') { alert('Вы не заполнили поле: Отчество'); return };
        if (postData.telephone === '') { alert('Вы не заполнили поле: Телефон'); return };
        if (postData.telephone.length < 11) { alert('Ошибка в номере телефона'); return };
        if (postData.email === '') { alert('Вы не заполнили поле: email'); return };
        if (postData.email === false) { alert('Ошибка в email'); return };
        if (postData.hashed_password === '') { alert('Вы не заполнили поле: Пароль'); return };
        if (postData.hashed_password === false) { alert('Пароли не совпадают'); return };

        fetch(`${process.env.REACT_APP_URL}/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка соединения');
                }
                return response.json();
            })
            .then(data => {
                navigate('/lk')
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Произошла ошибка')
            });
    }

    return (
        <div className="registrateCenter">
            <div className="registrate">
                <h1 className="registrateHeaderText">Регистрация</h1>
                <div className="registrateContent">
                    <form>
                        <input className="registrateFormInput" name="surname" id="surname" placeholder="Фамилия*" value={formData.surname} onChange={onChange} />
                        <input className="registrateFormInput" name="name" id="name" placeholder="Имя*" value={formData.name} onChange={onChange} />
                        <input className="registrateFormInput" name="secondname" id="second_name" placeholder="Отчество*" value={formData.secondname} onChange={onChange} />
                        <input className="registrateFormInput" name="telephone" id="telephone" placeholder="Моб. телефон*" value={formData.telephone} onChange={onChangePhone} />
                        <input className="registrateFormInput" name="mail" id="mail" placeholder="Эл. почта*" value={formData.mail} onChange={onChange} />
                        <input className="registrateFormInput" type="password" name="password" id="password" value={formData.password} onChange={onChange} placeholder="Пароль*" />
                        <input className="registrateFormInput" type="password" name="c_password" id="c_password" value={formData.c_password} onChange={onChange} placeholder="Подтвердите пароль*" />
                        <p className="registrateFormText">*-поля, обязательные для заполнения</p>
                    </form>
                    <button className="registrateButton" onClick={onSumbit}>
                        Зарегестрироваться
                    </button>
                    <div className="registrateFooter">
                        <input type="checkbox" id="pepe" className="registrateFooterInput" />
                        <label htmlFor="pepe"></label>
                        <span className="registrateFooterText">Продолжая использовать данный сайт и нажимая на кнопку «Стать клиентом», я подтверждаю, что согласен на обработку моих персональных данных на изложенных в Согласии на обработку персональных данных условиях и я ознакомлен с Положением по обработке персональных данных, Соглашением по использованию сервиса, Условиями оплаты и отказа от услуги.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}