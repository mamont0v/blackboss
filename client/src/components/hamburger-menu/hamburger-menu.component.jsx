import React from 'react';
import { Link } from 'react-router-dom'
import './hamburger-menu.styles.scss'

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">

                <li><Link className="menu__item" to="/">Главная</Link></li>
                <li><Link className="menu__item" to="/products">Магазин</Link></li>
                <li><Link className="menu__item" to="/help">Помощь</Link></li>
                <li><Link className="menu__item" to="/blog">Блог</Link></li>
                <li><Link className="menu__item" to="/chekout">Заказать +7-777-77-77</Link></li>
                <li><Link className="menu__item" to="/chekout">Контакты</Link></li>
                <li><Link className="menu__item" to="#">Наш адрес</Link></li>
            </ul>
        </div>
    )
}

export default HamburgerMenu