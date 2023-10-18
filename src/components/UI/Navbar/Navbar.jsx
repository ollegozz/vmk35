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
                <Link to="/">Главная</Link>
                <Link to="/about">О компании</Link>
                <Link to="/catalog">Каталог</Link>
                <Link to="/news">Новости</Link>
                <Link to="/sales-points">Точки продаж</Link>
                <Link to="/partners">Партнерам</Link>
                <Link to="/contacts">Контакты</Link>
            </div>
            <div className={css.button}>
                <Button onClick={logout}>Выйти</Button>
            </div>
        </div>
    )

}

export default Navbar;
