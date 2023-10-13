import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context';

function App() {
  return (
    <AuthContext.Provider value={{}}>
      <BrowserRouter>
        <div className="App">
          123
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
