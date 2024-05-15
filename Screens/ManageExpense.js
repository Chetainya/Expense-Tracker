import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({route , navigation}){
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId


    useLayoutEffect(() => {
        navigation.setOptions( {
            title : isEditing ? 'Edit Expense' : 'Add Expense'
        })
    } , [navigation , isEditing])

    return <Text>ManageExpenses</Text>
}

export default ManageExpense