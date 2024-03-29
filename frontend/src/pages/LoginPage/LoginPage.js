import './loginPage.css'
import getCookie from '../../functions/getCookie'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import formatPhoneNumber from '../../functions/formatPhoneNumber';
import jsonToUrlEncoded from '../../functions/jsonToUrlEncoded';

export default function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        if (getCookie('isUserLoged')) {
            if (getCookie('isUserLoged') === 'true') {
                navigate('/lk')
            }
        }
    }, [])

    function onChangePhone(e) {
        let { value } = e.target;

        let formattedPhoneNumber = value.replace(/[^\d+]/g, '');
        if (value.includes('+')) {
            formattedPhoneNumber = formattedPhoneNumber.substring(0, 12);
        } else {
            formattedPhoneNumber = formattedPhoneNumber.substring(0, 11);
        }

        setLogin(formattedPhoneNumber)
    }

    function onChangePassword(e) {
        setPassword(e.currentTarget.value)
    }

    function handleClick() {
        const postData = {
            username: formatPhoneNumber(login),
            password: password
        };

        if (postData.username < 11) { alert('Вы не заполнили поле: Телефон'); return };
        if (postData.password === '') { alert('Вы не заполнили поле: Пароль'); return };

        fetch(`${process.env.REACT_APP_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: jsonToUrlEncoded(postData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка соединения');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response:', data);
                //     document.cookie = "isUserLoged=true; path=/;"
                //     navigate(0)
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Произошла ошибка')
            });
    }


    return (
        <div className="signInCenter">
            <div className="signIn">
                <div className="signInHeader">
                    <h1 className="signInHeaderText">Вход</h1>
                </div>
                <div className="signInMain">
                    <form>
                        <input className="signInFormInput phoneIcon" type="text" name="login" id="login" placeholder="введите номер телефона..." value={login} onChange={onChangePhone} />
                        <input className="signInFormInput passwordIcon" type="password" name="password" id="" placeholder="пароль..." value={password} onChange={onChangePassword} />
                    </form>

                    <div className="signInPasswordWindow">
                        <label className="signInRemeberPasswordGroup">
                            <input type="checkbox" className="signInRemeberPassword" />
                            <span className="signInRemeberPasswordText">Запомнить пароль?</span>
                        </label>
                        <a className="signInForgotPassword" href="#0">Забыли пароль?</a>
                    </div>

                    <button className="signInButton" onClick={handleClick}>
                        Войти
                    </button>
                    <a className="signInRegistrate" href="/registration">Зарегестрироваться</a>
                </div>
            </div>
        </div>
    )
}