import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';
import css from './navbar.module.css'

function Navbar() {

    const { isAuth, setIsAuth, navItem, isBurger, setIsBurger } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

  const test = (e) => {
        // onClick = {() => setIsBurger(!isBurger)
        setIsBurger(!isBurger)
        console.log(isBurger);
        console.log(e.target);
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
                    <span/>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;
