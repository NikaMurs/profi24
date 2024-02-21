import { Link } from 'react-router-dom'
import './productsPage.css'

export default function ProductsPage() {

    return (
        <div className="contentCards">
            <div className="contentCardsLine">
                <Link className='contentCard' to='/'>Фотопечать Lay-Flat</Link>
                <Link className='contentCard' to='/'>Полиграфическая</Link>
                <Link className='contentCard' to='/'>Полиграфическая</Link>
            </div>
            <div className="contentCardsLine">
                <Link className='contentCard' to='/'>Фотопечать Lay-Flat</Link>
                <Link className='contentCard' to='/'>Полиграфическая</Link>
            </div>
        </div>
    )
}