import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context';
import '../../App.css';
import css from './main.module.css'

export default function Main() {
  const {  isBurger } = useContext(AuthContext)
  
  
  return (    
    <div className='wrapper'>      
        <h1 style={{ padding: 20 }}>MAIN</h1>
        <div style={{ padding: 10 }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, placeat fuga sunt repudiandae explicabo sequi nisi illo, dolores soluta assumenda facere quisquam ratione accusantium, error temporibus. Minima nam consectetur fugit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, placeat fuga sunt repudiandae explicabo sequi nisi illo, dolores soluta assumenda facere quisquam ratione accusantium, error temporibus. Minima nam consectetur fugit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, placeat fuga sunt repudiandae explicabo sequi nisi illo, dolores soluta assumenda facere quisquam ratione accusantium, error temporibus. Minima nam consectetur fugit!</p>
        </div>
      </div>  
  )
}
