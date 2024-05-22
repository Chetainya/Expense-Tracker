import { createContext, useReducer } from "react";
import { dateFormatter } from "../utils/date";

export  const ExpenseContext = createContext({
    expenses : [],
    addExpense : ({description , amount , date}) => {},
    deleteExpense : (id) => {},
    updateExpense : (id , {description , amount , Date}) => {},
    setExpenses : (expenses) => {}
});


function expenseReducer(state , action){

    if(action.type === 'ADD'){
        
        return [action.payload,...state ]

    }else if(action.type === 'UPDATE'){

        const toBeUpdatedExpenseIndex = state.findIndex((expense) => expense.id === action.payload.expenseId)
        const updatedExpense = {...state[toBeUpdatedExpenseIndex] , ...action.payload.expenseData}
        const oldState = [...state]
        oldState[toBeUpdatedExpenseIndex] = updatedExpense
        const newState = oldState
        console.log(newState)
        return newState

    }else if(action.type === 'SET'){
        const inverted = action.payload.reverse();
        return inverted
    }
    else {

        return state.filter(expense => expense.id !== action.payload)

    }
}





export default function ExpenseContextProvider({children}){

    const [expensesState , dispatch] = useReducer(expenseReducer , [])


    function deleteExpense(id){
        dispatch({type : 'DELETE' , payload : id})
    }

    function addExpense(expenseData){
        
        dispatch ({type : 'ADD' , payload : expenseData})
    }

    function updateExpense(expenseData){
        dispatch({type : 'UPDATE' , payload : expenseData})
    }
    function setExpenses(expenses){
        dispatch({type : 'SET' , payload : expenses})
    }

    const value = {
        expenses : expensesState,
        deleteExpense : deleteExpense,
        addExpense : addExpense,
        updateExpense: updateExpense,
        setExpenses : setExpenses
    }

    return <ExpenseContext.Provider value={value}>
        {children}
    </ExpenseContext.Provider>
}

