import { createContext , useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionContextProvider = ({children}) =>
{
    const [allTransactions,setAllTransactions] = useState([]);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);

    const getAllTransactions = async () =>
    {
        const data = await fetch(
            `http://localhost:8080/transactions/all`,
            {
              method : "GET"
            }
        );

        const fetchedData = await data.json();

        setAllTransactions(fetchedData.allTransactions);        
        
    }   

    const getExpenseAndIncome = () =>
    {
        let incomeAmount = 0;
        let expenseAmount = 0;

        allTransactions.forEach(
            (item)=>
            {
                if(item.type == 'expense') expenseAmount += item.amount;
                else incomeAmount += item.amount;
            }
        );

        setIncome(incomeAmount);
        setExpense(expenseAmount);
    }

    useEffect(()=>
    {
        getAllTransactions();           
        
    },[])

    useEffect(()=>
    {
        getExpenseAndIncome();
    },[getAllTransactions])




    return (
        <TransactionContext.Provider value={{allTransactions , setAllTransactions , getAllTransactions,income,expense,setIncome,setExpense}}>
            {children}
        </TransactionContext.Provider>
    )
}