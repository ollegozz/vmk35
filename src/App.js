import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter'
import { AuthContext } from './context';
import Main from './pages/Main/Main';

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        {/* <Main /> */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
