import './App.css';
import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TransactionPage from './Pages/TransactionPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/transactions' element={<TransactionPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
