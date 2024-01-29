import React, { useContext} from 'react';
import '../Balance/Balance.css';
import rupay from '../Balance/Rupay.png';
import { TransactionContext } from '../../context/TransactionContext';
import { UserContext } from '../../context/UserContext';
import { useMediaQuery } from '@mui/material';

const Balance = () => {

    const transactionContext = useContext(TransactionContext);
    const userContext = useContext(UserContext);
    const MobileScreens = useMediaQuery("(min-width : 750px)");


  return (
    <div 
        className='debitCard'
        style=
        {{
            display:'flex',
            flexDirection:'column',
            padding : !MobileScreens ? '0.8rem 1rem' :  '1.5rem 2rem',
            width : !MobileScreens ? '18rem' : 'fit-content',
            height:'fit-content',
            gap: !MobileScreens ? '0.8rem' : '1.5rem'
        }}    
    >
        <div><p>Available Balance</p></div>
        <div><h1 style={{fontSize : !MobileScreens && '1.5rem'}}>{transactionContext.income - transactionContext.expense} ₹</h1></div>
        <div
            style=
            {{
                display:'flex',
                justifyContent:'space-between',
                gap: MobileScreens ? '2rem' : '1rem'
            }}
        >
            <div>
                <h3 style={{fontSize : !MobileScreens && '1rem'}}>**** **** 1234 5678</h3>
                <h4 style={{fontSize : !MobileScreens && '0.8rem'}}>{userContext.auth.user.name.toUpperCase()}</h4>
            </div>
            <div>
                <img src={rupay} alt="Rupay Icon" height={!MobileScreens ? '45rem' : '55rem'}/>
            </div>
        </div>
    </div>
  )
}

export default Balance;