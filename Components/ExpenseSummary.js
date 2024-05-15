import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../Constants/Style"

function ExpenseSummary({expenses , expensesPeriod}){
    const Total = expenses.reduce((sum , expense) => {return sum + parseInt(expense.amount)} , 0)
    return <View style={styles.container}>
        <Text style={styles.period}>{expensesPeriod}</Text>
        <Text style={styles.sum}>{Total}</Text>
    </View>
}
export default ExpenseSummary

const styles = StyleSheet.create({
    container : {
        padding : 16,
        backgroundColor : GlobalStyles.colors.primary500,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderRadius : 10,
        marginBottom : 15
    },
    period : {
        fontSize : 16,
        color : 'white'
    },
    sum : {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'white'
    }
})