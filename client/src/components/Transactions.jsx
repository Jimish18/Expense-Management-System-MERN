import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransactionContext } from '../context/TransactionContext';
import { UserContext } from '../context/UserContext';

const Transactions = ({type}) => {

  const transactionContext = useContext(TransactionContext);
  const userContext = useContext(UserContext);

  let transactions = type === 'recent' ? transactionContext.allTransactions.slice(0,5) : transactionContext.allTransactions;
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction Name</TableCell>
            <TableCell align="center">Amount ₹</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center"></TableCell>
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
              <TableCell align="center">{transaction.createdAt.substr(0,10)}</TableCell>
              <TableCell align="center">{transaction.createdAt.substr(11,8)}</TableCell>
              <TableCell align="center">
                <DeleteIcon
                  sx={{cursor:'pointer'}}
                  onClick = {
                    async () =>
                    {
                      const deletedTransaction = await fetch(
                        `http://localhost:8080/transactions/delete/${userContext.auth.user._id}/${transaction._id}`,
                        {
                            method : "DELETE"
                        }
                      )  ;

                      const data = await deletedTransaction.json();

                      transactionContext.getAllTransactions();

                      transactions = transactionContext.allTransactions;

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