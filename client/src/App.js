import './App.css';
import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TransactionPage from './Pages/TransactionPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

function App() {

  const userContext = useContext(UserContext);

  return (
    <div>
      <Routes>

        <Route path='/' element={userContext.auth.token.length ? <HomePage/> : <LoginPage/>}/>
        <Route path='/transactions' element={userContext.auth.token.length ? <TransactionPage/> : <LoginPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegistrationPage/>} />
      </Routes>
    </div>
  );
}

export default App;
