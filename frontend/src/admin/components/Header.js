import '../style.css'
import { NavLink } from "react-router-dom";

export default function Header() {

    function isActiveFunc(isActiveElement) {
        if (isActiveElement) {
            return 'headerButton headerButton_active'
        } else {
            return 'headerButton'
        }
    }

    return (
        <nav className="buttons">
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/admin/orders">Заказы</NavLink>
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/admin/users">Юзеры</NavLink>
            <NavLink style={{ width: '210px' }} className={({ isActive }) => isActiveFunc(isActive)} to="/admin/management">Управление</NavLink>
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/admin/invoice">Счет</NavLink>
        </nav>
    )
}