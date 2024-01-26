import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Balance from '../components/Balance/Balance'
import AddTransaction from '../components/AddTransaction/AddTransaction'

const HomePage = () => {
  return (
    <div style={{display:'flex',width:'100vw'}}>

      <Sidebar/>

      <div 
        className="mainContainer" 
        style=
        {{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          width : '100%',
          height : '100vh'
        }}
        >
          <div 
            className="subContainer1" 
            style=
            {{
              display:'flex',
              alignItems:'center',
              justifyContent:'space-evenly',
              height : '50vh'
            }}
          >
            <Balance/>
            <AddTransaction/>
          </div>
      </div>

    </div>
  )
}

export default HomePage