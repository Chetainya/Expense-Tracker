import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text , View } from "react-native";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { GlobalStyles } from "../Constants/Style";
import  { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseForm from "../Components/ExpenseForm";

function ManageExpense({route , navigation}){
    const expenseCtx = useContext(ExpenseContext)
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId


    function deleteHandeler(){
        expenseCtx.deleteExpense(expenseId)
        navigation.goBack();
    }

    function addExpense(){
        expenseCtx.addExpense();
        navigation.goBack();
    }
    function cancelHandeler(){
        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions( {
            title : isEditing ? 'Edit Expense' : 'Add Expense'
        })
    } , [navigation , isEditing])

    return <View style={styles.container}>
        <ExpenseForm />
        <View style={styles.ButtonsContainer}>
            <Button onPress={addExpense}>{isEditing ? 'Update' : 'Add'}</Button>
            <Button onPress={cancelHandeler}>Cancel</Button>
        </View>
        <View style={styles.deleteContainer}>

        {isEditing && <IconButton name="delete" size={24} color="red" onPress={deleteHandeler} />}
        </View>
    </View>
}

export default ManageExpense

const styles=StyleSheet.create({
    container : {
        backgroundColor : GlobalStyles.colors.primary200,
        flex : 1
    },
    deleteContainer : {
        alignItems : 'center',
        padding : 10,
        borderTopWidth : 2,
        margin : 30,
        marginTop : 10
    },
    ButtonsContainer: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        marginTop : 10
    }
})