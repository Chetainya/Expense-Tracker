import { useContext } from "react";
import { Text } from "react-native";
import { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseOutput from "../Components/ExpenseOutput";
import { getDateMinusDays } from "../utils/date";

function RecentExpenses(){
    const expenseCtx = useContext(ExpenseContext);

    const expenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        
        const startDate = getDateMinusDays(today , 7);
    
        return expense.Date > startDate
    })
    

    return <ExpenseOutput expenses={expenses} fallBack='No expenses within the time selected' />
}

export default RecentExpenses