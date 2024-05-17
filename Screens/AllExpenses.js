import { Text } from "react-native";
import ExpenseOutput from "../Components/ExpenseOutput";
import { useContext } from "react";
import { ExpenseContext } from "../Store/ExpenseContext";

function AllExpenses(){
    const expenseCtx = useContext(ExpenseContext);
    return <ExpenseOutput expenses={expenseCtx.expenses} fallBack='Add Expenses'/>
}

export default AllExpenses