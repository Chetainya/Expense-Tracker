import { StyleSheet, View } from "react-native"
import ExpenseSummary from "./ExpenseSummary"
import ExpenseList from "./ExpenseList"
import { GlobalStyles } from "../Constants/Style"

const DUMMY_DATA = [ {
    id : 'e1',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-12-9')
},
{
    id : 'e2',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-12-9')
},
{
    id : 'e3',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-12-9')
},
{
    id : 'e4',
    amount : '100',
    description : 'Hello This an expense',
    Date : new Date('2024-12-9')
},

]

function ExpenseOutput({expenses , expensesPeriod}){

    return <View style={styles.container}>
        <ExpenseSummary expenses={DUMMY_DATA} expensesPeriod='Last 7 days' />
        <ExpenseList expenses={DUMMY_DATA} />
    </View>
}
export default ExpenseOutput

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : GlobalStyles.colors.primary100,
        padding : 12
    }
})