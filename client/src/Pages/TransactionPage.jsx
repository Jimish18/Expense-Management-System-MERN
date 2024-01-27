import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Transactions from '../components/Transactions'

const TransactionPage = () => {
  return (
    <div 
      style=
      {{
        display:'flex',
        width:'100vw'
      }}
    >

      <Sidebar/>
      <Transactions type='all'/>

    </div>
  )
}

export default TransactionPage