import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context';
// import Button from '../Button/Button';
import css from './navbar.module.css'

function Navbar() {

    const navItems = [
        { path: '/', name: 'Главная' },
        { path: '/about', name: 'О компании' },
        { path: '/catalog', name: 'Каталог' },
        { path: '/news', name: 'Новости' },
        { path: '/sales-points', name: 'Точки продаж' },
        { path: '/partners', name: 'Партнерам' },
        { path: '/contacts', name: 'Контакты' }
    ]

    const { showBurger, setShowBurger } = useContext(AuthContext)

    return (
        <nav className={css.navbar}>
            <div className={css.navbar__links}>
                {navItems.map(item =>
                    <div key={item.path} className={css.navbar__link}><Link to={item.path}>{item.name}</Link></div>
                )}
                <h2 className={css.logo}>Text LOGO</h2>
            </div>
            <div className={css.button}>
                <div className={showBurger ? [`${css.burger_btn} ${css.burger_btn_close}`] : css.burger_btn}
                    onClick={() => setShowBurger(!showBurger)}>
                    <span />
                </div>
            </div>            
                <div className={showBurger === false ? css.burger : css.burger_active}>
                    <div className={css.burger__links}>
                        {navItems.map(item =>
                            <div onClick={() => setShowBurger(!showBurger)} key={item.path} className={css.burger__link}>
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        )}
                    </div>
                </div>                
        </nav>
    )

}

export default Navbar;
