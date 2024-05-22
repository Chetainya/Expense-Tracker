import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text , View } from "react-native";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { GlobalStyles } from "../Constants/Style";
import  { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseForm from "../Components/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";

function ManageExpense({route , navigation}){
   
    const expenseCtx = useContext(ExpenseContext)
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId
    async function deleteHandeler(){
        await deleteExpense(expenseId)
        expenseCtx.deleteExpense(expenseId)
        navigation.goBack();
    }

    
    function cancelHandeler(){
        navigation.goBack();
    }

    async function confirmHandeler(expenseData){

        if(isEditing){              
                              
            await updateExpense(expenseId , expenseData)
            expenseCtx.updateExpense({expenseId , expenseData})             
        }else{                       
            const id = await storeExpense(expenseData)           
            expenseCtx.addExpense({...expenseData , id : id})          
        }                   
        navigation.goBack();                    
    }               

    useLayoutEffect(() => {
        navigation.setOptions( {
            title : isEditing ? 'Edit Expense' : 'Add Expense'
        })
    } , [navigation , isEditing])

    

    return <View style={styles.container}>
        <ExpenseForm expenseId={expenseId} onCancel={cancelHandeler} submitButtonLabel={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandeler} />
       
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
    
})