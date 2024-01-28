import React, { useContext, useEffect, useState } from 'react';
import '../Balance/Balance.css';
import rupay from '../Balance/Rupay.png';
import { TransactionContext } from '../../context/TransactionContext';
import { UserContext } from '../../context/UserContext';

const Balance = () => {

    const transactionContext = useContext(TransactionContext);
    const userContext = useContext(UserContext);


  return (
    <div 
        className='debitCard'
        style=
        {{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            padding : '1.5rem 2rem'
        }}    
    >
        <div><p>Available Balance</p></div>
        <div><h1>{transactionContext.income - transactionContext.expense} ₹</h1></div>
        <div
            style=
            {{
                display:'flex',
                justifyContent:'space-between'
            }}
        >
            <div>
                <h3>**** **** 1234 5678</h3>
                <h4>{userContext.auth.user.name.toUpperCase()}</h4>
            </div>
            <div>
                <img src={rupay} alt="Rupay Icon" height='55rem'/>
            </div>
        </div>
    </div>
  )
}

export default Balance;