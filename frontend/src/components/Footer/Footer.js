import './footer.css'

export default function Footer() {

    return (
        <footer class="footer">
            <div class="footerContent">
                <div class="footerServices">
                    <p class="footerTextTitle">Услуги</p>
                    <ul class="footerTextList">
                        <li class="footerTextListName"><a href="#0">Фотопечать Layflat</a></li>
                        <li class="footerTextListName"><a href="#0">Полиграфическая печать</a></li>
                        <li class="footerTextListName"><a href="#0">Полиграфическая постраничная</a></li>
                        <li class="footerTextListName"><a href="#0">Холсты</a></li>
                        <li class="footerTextListName"><a href="#0">Папки и трюмо</a></li>
                    </ul>
                </div>
                <div class="footerHelp">
                    <p class="footerTextTitle">Помощь</p>
                    <ul class="footerTextList">
                        <li class="footerTextListName"><a href="#0">Оплата и доставка</a></li>
                        <li class="footerTextListName"><a href="#0">Политика конфиденциальности</a></li>
                        <li class="footerTextListName"><a href="#0">Договор оферты</a></li>
                        <li class="footerTextListName"><a href="#0">Вопросы и ответы</a></li>
                        <li class="footerTextListName"><a href="#0">Требования к макетам</a></li>
                        <li class="footerTextListName"><a href="#0">Отзывы клиентов</a></li>
                        <li class="footerTextListName"><a href="#0">Реквезиты</a></li>
                    </ul>
                </div>
                <div class="footerContacts">
                    <p class="footerTextTitle">Контактная информация</p>
                    <ul class="footerTextList">
                        <li class="footerTextListName">Мурманск, ул.Промышленная, 18к5</li>
                        <li class="footerTextListName"><br></br></li>
                        <li class="footerTextListName">9113003006@mail.ru</li>
                        <li class="footerTextListName"><br></br></li>
                        <li class="footerTextListName"><a href="tel:+79113003006">+7 (8152) 70-30-06</a></li>
                        <li class="footerTextListName"><a href="tel:+79113003006">+7 (911) 300-30-06</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}