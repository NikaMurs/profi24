import './footer.css'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerServices">
                    <p className="footerTextTitle">Услуги</p>
                    <ul className="footerTextList">
                        <li className="footerTextListName"><a href="#0">Фотопечать Layflat</a></li>
                        <li className="footerTextListName"><a href="#0">Полиграфическая печать</a></li>
                        <li className="footerTextListName"><a href="#0">Полиграфическая постраничная</a></li>
                        <li className="footerTextListName"><a href="#0">Холсты</a></li>
                        <li className="footerTextListName"><a href="#0">Папки и трюмо</a></li>
                    </ul>
                </div>
                <div className="footerHelp">
                    <p className="footerTextTitle">Помощь</p>
                    <ul className="footerTextList">
                        <li className="footerTextListName"><a href="#0">Оплата и доставка</a></li>
                        <li className="footerTextListName"><a href="#0">Политика конфиденциальности</a></li>
                        <li className="footerTextListName"><a href="#0">Договор оферты</a></li>
                        <li className="footerTextListName"><a href="#0">Вопросы и ответы</a></li>
                        <li className="footerTextListName"><a href="#0">Требования к макетам</a></li>
                        <li className="footerTextListName"><a href="#0">Отзывы клиентов</a></li>
                        <li className="footerTextListName"><a href="#0">Реквезиты</a></li>
                    </ul>
                </div>
                <div className="footerContacts">
                    <p className="footerTextTitle">Контактная информация</p>
                    <ul className="footerTextList">
                        <li className="footerTextListName">Мурманск, ул.Промышленная, 18к5</li>
                        <li className="footerTextListName"><br></br></li>
                        <li className="footerTextListName">9113003006@mail.ru</li>
                        <li className="footerTextListName"><br></br></li>
                        <li className="footerTextListName"><a href="tel:+79113003006">+7 (8152) 70-30-06</a></li>
                        <li className="footerTextListName"><a href="tel:+79113003006">+7 (911) 300-30-06</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}