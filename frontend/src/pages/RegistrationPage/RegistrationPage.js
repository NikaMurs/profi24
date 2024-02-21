import './registrationPage.css'

export default function RegistrationPage() {

    return (
        <div className="registrateCenter">
            <div className="registrate">
                <h1 className="registrateHeaderText">Регистрация</h1>
                <div className="registrateContent">
                    <form>
                        <input className="registrateFormInput" type="" name="f_name" id="f_name" placeholder="Фамилия*" required />
                        <input className="registrateFormInput" type="" name="name" id="name" placeholder="Имя*" />
                        <input className="registrateFormInput" type="" name="t_name" id="t_name" placeholder="Отчество*" />
                        <input className="registrateFormInput" type="" name="country" id="country" placeholder="Страна*" />
                        <input className="registrateFormInput" type="" name="city" id="city" placeholder="Город*" />
                        <input className="registrateFormInput" type="" name="tel" id="tel" placeholder="Моб. телефон*" />
                        <input className="registrateFormInput" type="" name="mail" id="mail" placeholder="Эл. почта*" />
                        <input className="registrateFormInput" type="" name="site" id="" placeholder="Сайт" />
                        <input className="registrateFormInput" type="" name="vk" id="" placeholder="Вк" />
                        <input className="registrateFormInput" type="" name="profession" id="" placeholder="Род деятельности" />
                        <input className="registrateFormInput" type="" name="count_book" id="" placeholder="Сколько книг в год?" />
                        <input className="registrateFormInput" type="password" name="pasw" id="" placeholder="Пароль*" />
                        <input className="registrateFormInput" type="password" name="c_pasw" id="" placeholder="Подтвердите пароль*" />
                        <p className="registrateFormText">*-поля, обязательные для заполнения</p>
                    </form>
                    <button className="registrateButton" onclick="cod();">
                        Зарегестрироваться
                    </button>
                    <div className="registrateFooter">
                        <input type="checkbox" id="pepe" className="registrateFooterInput" />
                        <label for="pepe"></label>
                        <span className="registrateFooterText">Продолжая использовать данный сайт и нажимая на кнопку «Стать клиентом», я подтверждаю, что согласен на обработку моих персональных данных на изложенных в Согласии на обработку персональных данных условиях и я ознакомлен с Положением по обработке персональных данных, Соглашением по использованию сервиса, Условиями оплаты и отказа от услуги.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}