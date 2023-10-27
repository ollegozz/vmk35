import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Burger from './components/UI/Navbar/Burger/Burger';
import AppRouter from './components/AppRouter'
import { AuthContext } from './context';
import Footer from './components/UI/Footer/Footer';
function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isBurger, setIsBurger] = useState(false)

  const navItem = [{
    path: '/', name: 'Главная'
  }, {
    path: '/about', name: 'О компании'
  }, {
    path: '/catalog', name: 'Каталог'
  }, {
    path: '/news', name: 'Новости'
  }, {
    path: '/sales-points', name: 'Точки продаж'
  }, {
    path: '/partners', name: 'Партнерам'
  }, {
    path: '/contacts', name: 'Контакты'
  }
  ]

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth,
      isLoading,
      navItem,
      isBurger, setIsBurger
    }}>
      <BrowserRouter>
        <Navbar />
        <Burger/>
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
