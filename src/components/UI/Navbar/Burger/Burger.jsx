import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../../App.css';
import { AuthContext } from '../../../../context';
import css from './burger.module.css'

export default function Burger() {

    const { isAuth, navItem, isBurger } = useContext(AuthContext)

  
  return (
      isBurger &&
      <nav className={css.navbar}>
          <div className={css.navbar__links}>
              {navItem.map(item =>
                  <div key={item.path} className={css.navbar__link}><Link to={item.path}>{item.name}</Link></div>
              )}
          </div>
          </nav>
  )
}
