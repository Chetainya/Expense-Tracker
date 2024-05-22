import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseOutput from "../Components/ExpenseOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../utils/http";
import LoadingOverlay from "../Components/LoadingOverlay";
import ErrorOverlay from "../Components/ErrorOverlay";

function RecentExpenses(){
    const expenseCtx = useContext(ExpenseContext);
    const [isFetching , setIsFetching] = useState(true);
    const [error , setError] = useState();

    useEffect(() => {
        async function getData(){
            setIsFetching(true);
            try{

                const expenseData = await fetchExpense();
                expenseCtx.setExpenses(expenseData);
            }catch(error){
                setError('Unable to Fetch Expenses')
            }
            setIsFetching(false);
          
        }
        getData();
    } , [])



    const expenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        
        const startDate = getDateMinusDays(today , 7);
    
        return expense.Date > startDate
    })
    if(error){
        return <ErrorOverlay message={error} />
    }
    if(isFetching){
        return <LoadingOverlay />
    }

    return <ExpenseOutput expenses={expenses} fallBack='No expenses within the time selected' />
}

export default RecentExpenses