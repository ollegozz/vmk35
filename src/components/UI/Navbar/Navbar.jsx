import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';
import css from './navbar.module.css'

function Navbar() {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={css.navbar}>
            <div className={css.navbar__links}>
                <div className={css.logo}>ВМК</div>
                <div className={css.navbar__link}><Link to="/">Главная</Link></div>
                <div className={css.navbar__link}><Link to="/about">О компании</Link></div>
                <div className={css.navbar__link}><Link to="/catalog">Каталог</Link></div>
                <div className={css.navbar__link}><Link to="/news">Новости</Link></div>
                <div className={css.navbar__link}><Link to="/sales-points">Точки продаж</Link></div>
                <div className={css.navbar__link}><Link to="/partners">Партнерам</Link></div>
                <div className={css.navbar__link}><Link to="/contacts">Контакты</Link></div>
            </div>
            <div className={css.button}>
                <Button onClick={logout}>Выйти</Button>
            </div>
        </div>
    )

}

export default Navbar;
