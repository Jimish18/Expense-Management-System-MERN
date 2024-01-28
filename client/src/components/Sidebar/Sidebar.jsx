import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import '../Sidebar/Sidebar.css'
import { useNavigate } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';
import { UserContext } from '../../context/UserContext';


const Sidebar = () => {

    const navigate = useNavigate();
    const transactionContext = useContext(TransactionContext);
    const userContext = useContext(UserContext);

    const handleLogOut = () =>
    {
        userContext.setAuth(
            {
                ...userContext.auth,
                user:null,
                token:''
            }
        );

        localStorage.removeItem('auth');
    }

  return (
    <div className='primaryNav'>


        <div className='secondaryNav'>
            <div className="profile">
                <h2>{userContext.auth.user.name}</h2>
                <h6>{userContext.auth.user.profession}</h6>
            </div>

            <div className="budget">
                <div>
                    <div>
                        <TrendingUpIcon sx={{color : 'green'}}/>
                        <p>Income</p>
                    </div>
                    <h4>{transactionContext.income} ₹</h4>
                </div>
                <div>
                    <div>
                        <TrendingDownIcon sx={{color : 'red'}}/>
                        <p>Expense</p>
                    </div>
                    <h4>{transactionContext.expense} ₹</h4>
                </div>
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
                <ListItemButton onClick={handleLogOut}>
                    <ListItemIcon
                        
                        sx=
                        {{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }} 
                    >
                        <LogoutIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>            
            </List>
        </div>


    </div>
  )
}

export default Sidebar