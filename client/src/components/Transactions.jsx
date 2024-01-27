import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const Transactions = ({type}) => {

    const [transactions , setTransactions] = useState([]);
    const [size,setSize] = useState(0);

    const getTransactions = async () =>
    {
        const data = await fetch(
            `http://localhost:8080/transactions/${type}`,
            {
              method : "GET"
            }
        );

        const fetchedData = await data.json();

        setTransactions(type === 'all' ? fetchedData.allTransactions : fetchedData.recentTransactions);
        
    }

    useEffect(()=>
    {
        getTransactions();
    },[size])

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction Name</TableCell>
            <TableCell align="center">Amount ₹</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="transaction">
                {transaction.description}
                </TableCell>
                <TableCell align="center" sx={{color : transaction.type === 'expense' ? 'red' : 'green'}}>{transaction.amount} ₹</TableCell>
                <TableCell align="center">{transaction.createdAt}</TableCell>
                <TableCell align="center">{transaction.createdAt}</TableCell>
                <TableCell align="center">
                    <DeleteIcon
                        sx={{cursor:'pointer'}}
                        onClick = {
                            async () =>
                            {
                                const deletedTransaction = await fetch(
                                    `http://localhost:8080/transactions/delete/${transaction._id}`,
                                    {
                                        method : "DELETE"
                                    }
                                )  ;

                                const data = await deletedTransaction.json();

                                setSize(size-1);
                            }
                        }
                    />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Transactions;