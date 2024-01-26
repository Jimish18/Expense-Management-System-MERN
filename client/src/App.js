import './App.css';
import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TransactionPage from './Pages/TransactionPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/transactions' element={<TransactionPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegistrationPage/>} />
      </Routes>
    </div>
  );
}

export default App;
