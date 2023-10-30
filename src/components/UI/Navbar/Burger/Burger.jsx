import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../../App.css';
import { AuthContext } from '../../../../context';
import css from './burger.module.css'

export default function Burger() {

    const { isAuth, navItem, isBurger } = useContext(AuthContext)
  
  return (
      <div></div>
      
  )
}
