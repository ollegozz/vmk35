import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';
import css from './navbar.module.css'

function Navbar() {

    const { setIsAuth, navItem, isBurger, setIsBurger } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    const test = (e) => {
        // onClick = {() => setIsBurger(!isBurger)
        setIsBurger(!isBurger)
    }


    return (
        <nav className={css.navbar}>
            <div className={css.navbar__links}>
                {navItem.map(item =>
                    <div key={item.path} className={css.navbar__link}><Link to={item.path}>{item.name}</Link></div>
                )}
            </div>
            <div className={css.button}>
                <div><Button onClick={logout}>Выйти</Button></div>
                <div className={css.burger_btn} onClick={test}>
                    <span />
                </div>
            </div>
            {isBurger &&
                <nav className={css.burger}>
                    <div className={css.burger__links}>
                        {navItem.map(item =>
                            <div onClick={() => setIsBurger(!isBurger)} key={item.path} className={css.burger__link}>
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        )}
                    </div>
                </nav>}
        </nav>
    )

}

export default Navbar;
