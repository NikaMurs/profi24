import './loginPage.css'
import getCookie from '../../functions/getCookie'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (getCookie('isUserLoged')) {
            if (getCookie('isUserLoged') === 'true') {
                navigate('/lk')
            }
        }
    }, [])

    function handleChange(e) {
        switch (e.currentTarget.name) {
            case 'login':
                setLogin(e.currentTarget.value)
                break
            case 'password':
                setPassword(e.currentTarget.value)
                break
            default:
                break
        }
    }

    function handleClick() {
        if (login === '123' && password === '456') {
            document.cookie = "isUserLoged=true; path=/;"
            navigate('/lk')
        } else {
            alert('Неверные данные')
        }
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="signInCenter">
            <div className="signIn">
                <div className="signInHeader">
                    <h1 className="signInHeaderText">Вход</h1>
                </div>
                <div className="signInMain">
                    <form>
                        <input className="signInFormInput phoneIcon" type="text" name="login" id="login" placeholder="введите номер телефона..." value={login} onChange={handleChange} />
                        <input className="signInFormInput passwordIcon" type="password" name="password" id="" placeholder="пароль..." value={password} onChange={handleChange} />
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