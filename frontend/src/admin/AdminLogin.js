import { useEffect, useState } from 'react'
import './style.css'

export default function AdminLogin() {

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    useEffect(()=>{
        if (getCookie('isAdminLoged')) {
            if (getCookie('isAdminLoged') === 'true') {
                window.location.href = '/admin';
            }
        }
    }, [])

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


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
            document.cookie = "isAdminLoged=true; path=/admin;"
            window.location.href = '/admin';
        } else {
            alert('Неверные данные')
        }
    }

    return (
        <div className="signInCenter">
            <div className="signIn">
                <div className="signInMain">
                    <form>
                        <input className="signInFormInput phoneIcon" type="text" name='login' placeholder="Логин..." value={login} onChange={handleChange} />
                        <input className="signInFormInput passwordIcon" type="password" name='password' placeholder="Пароль..." value={password} onChange={handleChange} />
                    </form>

                    <button className="signInButton" onClick={handleClick}>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    )
}