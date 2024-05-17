import { StyleSheet, View , Text } from "react-native"
import ExpenseSummary from "./ExpenseSummary"
import ExpenseList from "./ExpenseList"
import { GlobalStyles } from "../Constants/Style"



function ExpenseOutput({expenses , expensesPeriod , fallBack}){
    

    return <View style={styles.container}>
        <ExpenseSummary expenses={expenses} expensesPeriod='Last 7 days' />
        {expenses.length > 0 ? <ExpenseList expenses={expenses} /> : <Text style={styles.fallBack}>{fallBack}</Text>}
        
    </View>
}
export default ExpenseOutput

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : GlobalStyles.colors.primary100,
        padding : 12
    },
    fallBack : {
        textAlign : 'center',
        margin : 15
    }
})