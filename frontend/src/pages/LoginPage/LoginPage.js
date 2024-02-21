import './loginPage.css'

export default function LoginPage() {

    return (
        <div className="signInCenter">
            <div className="signIn">
                <div className="signInHeader">
                    <h1 className="signInHeaderText">Вход</h1>
                </div>
                <div className="signInMain">
                    <form>
                        <input className="signInFormInput phoneIcon" type="text" name="login" id="login" placeholder="введите номер телефона..." />
                        <input className="signInFormInput passwordIcon" type="password" name="pasw" id="" placeholder="пароль..." />
                    </form>

                    <div className="signInPasswordWindow">
                        <label className="signInRemeberPasswordGroup">
                            <input type="checkbox" className="signInRemeberPassword" />
                            <span className="signInRemeberPasswordText">Запомнить пароль?</span>
                        </label>
                        <a className="signInForgotPassword" href="#0">Забыли пароль?</a>
                    </div>

                    <button className="signInButton">
                        Войти
                    </button>
                    <a className="signInRegistrate" href="/registration">Зарегестрироваться</a>
                </div>
            </div>
        </div>
    )
}