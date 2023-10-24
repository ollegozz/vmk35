import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter'
import { AuthContext } from './context';
import Footer from './components/UI/Footer/Footer';
function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
      isAuth,
      setIsAuth,
      isLoading,
      navItem
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
