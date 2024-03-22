import './registrationPage.css'

export default function RegistrationPage() {

    return (
        <div className="registrateCenter">
            <div className="registrate">
                <h1 className="registrateHeaderText">Регистрация</h1>
                <div className="registrateContent">
                    <form>
                        <input className="registrateFormInput" type="" name="surname" id="surname" placeholder="Фамилия*" required />
                        <input className="registrateFormInput" type="" name="name" id="name" placeholder="Имя*" required/>
                        <input className="registrateFormInput" type="" name="secondname" id="second_name" placeholder="Отчество*" required/>
                        <input className="registrateFormInput" type="" name="telephone" id="telephone" placeholder="Моб. телефон*" required/>
                        <input className="registrateFormInput" type="" name="mail" id="mail" placeholder="Эл. почта*" required/>
                        <input className="registrateFormInput" type="password" name="password" id="password" placeholder="Пароль*" required/>
                        <input className="registrateFormInput" type="password" name="c_password" id="c_password" placeholder="Подтвердите пароль*" required/>
                        <p className="registrateFormText">*-поля, обязательные для заполнения</p>
                    </form>
                    <button className="registrateButton">
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