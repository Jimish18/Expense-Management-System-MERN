import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Transactions from '../components/Transactions'
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleSidebar from '../components/ToggleSidebar/ToggleSidebar';
import { ToggleSidebarContext } from '../context/ToggleSidebarContext';


const TransactionPage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width : 1000px)");
  const toggleSidebarContext = useContext(ToggleSidebarContext);

  return (
    <div 
      style=
      {{
        display:'flex',
        width:'100vw',
        padding : !isNonMobileScreens ? '2.5rem 0 0 0': '0'
      }}
    >

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

      {isNonMobileScreens ? <Sidebar/> : toggleSidebarContext.openMenu && <ToggleSidebar />}
      <Transactions type='all' />

    </div>
  )
}

export default TransactionPage