import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';

function Navbar() {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
            <div className='navbar'>                
                <div className='navbar__links'>
                    <Link to="/">Main</Link>
                    <Link to="/about">About</Link>
                </div>
            <Button onClick={logout}>Выйти</Button>
            </div>
    )

}

export default Navbar;
