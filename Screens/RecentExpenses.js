import { useContext, useEffect } from "react";
import { Text } from "react-native";
import { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseOutput from "../Components/ExpenseOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../utils/http";

function RecentExpenses(){
    const expenseCtx = useContext(ExpenseContext);

    useEffect(() => {
        async function getData(){

            const expenseData = await fetchExpense();
            expenseCtx.setExpenses(expenseData);
        }
        getData();
    } , [])

    const expenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        
        const startDate = getDateMinusDays(today , 7);
    
        return expense.Date > startDate
    })
    

    return <ExpenseOutput expenses={expenses} fallBack='No expenses within the time selected' />
}

export default RecentExpenses