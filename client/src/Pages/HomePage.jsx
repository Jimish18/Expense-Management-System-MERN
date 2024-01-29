import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Balance from '../components/Balance/Balance'
import AddTransaction from '../components/AddTransaction/AddTransaction'
import Transactions from '../components/Transactions'
import { useMediaQuery } from '@mui/material'
import ToggleSidebar from '../components/ToggleSidebar/ToggleSidebar'
import MenuIcon from '@mui/icons-material/Menu';
import { ToggleSidebarContext } from '../context/ToggleSidebarContext'

const HomePage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width : 1000px)");
  const MobileScreens = useMediaQuery("(min-width : 750px)");
  const toggleSidebarContext = useContext(ToggleSidebarContext);

  return (
    <div style={{display:'flex',width:'100vw'}}>

      {!isNonMobileScreens && !toggleSidebarContext.openMenu && 
        <MenuIcon 
          onClick={()=>toggleSidebarContext.setOpenMenu(true)}
          sx=
            {{
              position:'absolute',
              top:'1rem',
              left:'1rem'
            }}
        /> 
      }

      {isNonMobileScreens ? <Sidebar/> : toggleSidebarContext.openMenu && <ToggleSidebar/>}

      <div 
        className="mainContainer" 
        style=
        {{
          display: 'flex' ,
          flexDirection:'column',
          justifyContent:'center',
          width : '100%',
          height : !MobileScreens ? 'fit-content' : '100vh',
          gap : !MobileScreens ? '2rem' : '0'
        }}
        >
          <div 
            className="subContainer1" 
            style=
            {{
              display:'flex',
              flexDirection : !MobileScreens ? 'column' : 'row',
              gap: !MobileScreens ? '2rem' : '0',
              alignItems:'center',
              justifyContent:'space-evenly',
              height : !MobileScreens ? 'fit-content' : '50vh',
              paddingTop : !MobileScreens ? '2.5rem' : 0
            }}
          >
            <Balance/>
            <AddTransaction/>
          </div>

        <Transactions type='recent'/>
      </div>

    </div>
  )
}

export default HomePage