import { createContext, useReducer } from "react";
import { dateFormatter } from "../utils/date";

export  const ExpenseContext = createContext({
    expenses : [],
    addExpense : ({description , amount , date}) => {},
    deleteExpense : (id) => {},
    updateExpense : (id , {description , amount , Date}) => {},
});


function expenseReducer(state , action){

    if(action.type === 'ADD'){
        const id = Date.now().toString() * Math.random();
        return [...state , {...action.payload , id : id}]

    }else if(action.type === 'UPDATE'){

        const toBeUpdatedExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
        const updatedExpense = {...state[toBeUpdatedExpenseIndex] , ...action.payload}
        const oldState = {...state}
        oldState[toBeUpdatedExpenseIndex] = updatedExpense
        const newState = oldState
        return newState

    }else {

        return state.filter(expense => expense.id !== action.payload)

    }
}


const DUMMY_DATA = [ {
    id : 'e1',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-5-11')
},
{
    id : 'e2',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-5-15')
},
{
    id : 'e3',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-4-19')
},
{
    id : 'e4',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-4-9')
},

]


export default function ExpenseContextProvider({children}){

    const [expensesState , dispatch] = useReducer(expenseReducer , DUMMY_DATA)


    function deleteExpense(id){
        dispatch({type : 'DELETE' , payload : id})
    }

    function addExpense(){
        const today = new Date('2024-5-17')
        dispatch ({type : 'ADD' , payload : {description : 'Dummy add Expense' , amount : 200 , Date : today}})
    }

    const value = {
        expenses : expensesState,
        deleteExpense : deleteExpense,
        addExpense : addExpense
    }

    return <ExpenseContext.Provider value={value}>
        {children}
    </ExpenseContext.Provider>
}

