import { createContext , useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionContextProvider = ({children}) =>
{
    const [allTransactions,setAllTransactions] = useState([]);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);

    
    // const userContext = useContext(UserContext);

    

    const getAllTransactions = async () =>
    {
        let uid = JSON.parse(localStorage.getItem('auth'))?.user?._id;
        const data = await fetch(
            `/transactions/all/${uid}`,
            {
              method : "GET"
            }
        );

        const fetchedData = await data.json();

        if(fetchedData.success)
        {
            setAllTransactions(fetchedData.orderedAllTransactions);

            let expenseAmount = 0;
            let incomeAmount = 0;

            fetchedData.orderedAllTransactions.forEach((tr) =>
            {
                if(tr.type == 'expense') expenseAmount += tr.amount;
                else incomeAmount += tr.amount;
            })

            setIncome(incomeAmount);
            setExpense(expenseAmount);
        }        
        
    }   

    
    useEffect(()=>
    {
        getAllTransactions();  
        
    },[])

    return (
        <TransactionContext.Provider value={{allTransactions , setAllTransactions , getAllTransactions,income,expense,setIncome,setExpense}}>
            {children}
        </TransactionContext.Provider>
    )
}