import React , {useState} from 'react';
import '../AddTransaction/AddTransaction.css';
import * as yup from "yup";
import 
{
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography
} from "@mui/material";
import { Formik } from 'formik';

const TransactionSchema = yup.object().shape(
    {
      amount : yup.number().required("required"),
      description : yup.string().required("required"),
    }
);
  
const initialValueTransaction = 
{
    amount : "",
    description : "",
}

const AddTransaction = () => {

    const [transactionType , setTransactionType] = useState(true);

    const handleFormSubmit = async (values , onSubmitProps) =>
    {
        values = {...values , type : transactionType ? 'expense' : 'income'};
        
        const newTransaction = await fetch(
            'http://localhost:8080/transactions/create',
            {
                method :"POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(values)
            }
        )

        const savedTransaction = await newTransaction.json();

        onSubmitProps.resetForm();
    }
    
  return (
    <div className='addTransactionContainer'>
        <h3>Add Transaction</h3>
        <div className="transactionType">
            <div onClick={()=>setTransactionType(true)}>
                <h4 style={{color:'red'}}>Expense</h4>
                {transactionType && <div className='underline' style={{backgroundColor:"red"}}></div>}
            </div>
            <div onClick={()=>setTransactionType(false)}>
                <h4 style={{color:'green'}}>Income</h4>
                {!transactionType && <div className='underline' style={{backgroundColor:"green"}}></div>}
            </div>
        </div>

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValueTransaction}
            validationSchema={TransactionSchema}
        >
        {
            ({
            values,
            errors,
            touched,
            handleblur,
            handleChange,
            handleSubmit
            }) => 

            (
            
                <form onSubmit={handleSubmit}
                    style=
                    {{
                        display : 'flex',
                        flexDirection : 'column',
                        gap : '1rem',
                        textAlign : 'center'
                    }}
                >
                
        
                    <TextField
                        label="Amount"
                        type='number'
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.amount}
                        name="amount"
                        error = {Boolean(touched.amount) && Boolean(errors.amount)}
                        helperText={touched.amount && errors.amount}
                    />
        
                    <TextField
                        label="Description"
                        type='text'
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.description}
                        name="description"
                        error = {Boolean(touched.description) && Boolean(errors.description)}
                        helperText={touched.description && errors.description}
                    />
        
        
                    {/* Buttons */}
                    <Box>
                        <Button
                            type='submit'
                        >
                            Add
                        </Button> 
                    </Box>
    
                </form>
            
            )
        }

        </Formik>

    </div>
  )
}

export default AddTransaction;