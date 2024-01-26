import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Sidebar/Sidebar.css'
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const navigate = useNavigate();
  return (
    <div className='primaryNav'>


        <div className='secondaryNav'>
            <div className="profile">
                <h2>Jimish Prajapati</h2>
                <h6>Student</h6>
            </div>

            <div className="budget">
                <h5>Budget for this Month</h5>
                <h3>125463$</h3>
            </div>

            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding onClick={() => navigate('/')}>
                            <ListItemButton>
                                <ListItemIcon
                                    sx=
                                    {{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }} 
                                >
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding onClick={() => navigate('/transactions')}>
                            <ListItemButton>
                                <ListItemIcon
                                    sx=
                                    {{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }} 
                                >
                                    <ReceiptLongIcon />
                                </ListItemIcon>
                                <ListItemText primary="Transactions"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
      
            </Box>
        </div>

        <div>
            <List>
                <ListItemButton>
                    <ListItemIcon
                        sx=
                        {{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }} 
                    >
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>            
            </List>
        </div>


    </div>
  )
}

export default Sidebar