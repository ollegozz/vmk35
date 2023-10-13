import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter'
import { AuthContext } from './context';
import Main from './pages/Main/Main';

function App() {
  return (
    <AuthContext.Provider value={{}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter/>
        {/* <Main /> */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
