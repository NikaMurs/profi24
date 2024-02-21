import './mainPage.css'
import { Link } from 'react-router-dom'

export default function MainPage() {

    return (
        <Link to='/products' className="contentCardsButton">Расчитать стоимость печати</Link>
    )
}