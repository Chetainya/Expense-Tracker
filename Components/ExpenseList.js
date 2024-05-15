import { FlatList, Text } from "react-native"
import ExpenseItem from "./ExpenseItem"

function ExpenseList({expenses}){
    return <FlatList data={expenses} renderItem={(itemData) => {
        
        return  <ExpenseItem id={itemData.item.id} description={itemData.item.description} amount={itemData.item.amount} date={itemData.item.Date} />} 
    }
        keyExtractor={item => item.id} />
}
export default ExpenseList