import axios from 'axios'

export async  function storeExpense(expenseData){
   const response = await axios.post('https://react-native-ea63c-default-rtdb.firebaseio.com/expenses.json' , expenseData)
   const id = response.data.name
   return id
}

export async function fetchExpense(){
    const response = await axios.get('https://react-native-ea63c-default-rtdb.firebaseio.com/expenses.json')
    const expenseData = []
    for(let key in response.data){
        const expenseObj = {
            id : key,
            amount : response.data[key].amount,
            description : response.data[key].description,
            Date : new Date(response.data[key].Date)
        }
        expenseData.push(expenseObj)
    }
    return expenseData
}

export async function updateExpense(id , updatedExpense){
    await axios.put(`https://react-native-ea63c-default-rtdb.firebaseio.com/expenses/${id}.json` , updatedExpense)
}

export async function deleteExpense(id){
    await axios.delete(`https://react-native-ea63c-default-rtdb.firebaseio.com/expenses/${id}.json`)
}