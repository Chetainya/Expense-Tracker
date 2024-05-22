import { StyleSheet, View , Text } from "react-native"
import Input from "./Input"
import { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import { ExpenseContext } from "../Store/ExpenseContext";
import { dateFormatter } from "../utils/date";
import { GlobalStyles } from "../Constants/Style";

function ExpenseForm({ expenseId ,onCancel , submitButtonLabel , onSubmit}){
    const expenseCtx = useContext(ExpenseContext)
    const [isValid , setIsValid] = useState({
        amount : true,
        description : true,
        Date : true
    })
    const [userValues , setUserValues] = useState({
        amount : '',
        description : '',
        Date : ''
    })
    let formIsInvalid = !isValid.amount || !isValid.Date || !isValid.description;
    useEffect(() => {
       if(expenseId){
        const toBeEdited = expenseCtx.expenses.find((expense) => expense.id === expenseId)
      
        setUserValues({
            amount : `${toBeEdited.amount}`,
            description : toBeEdited.description,
            Date :  `${toBeEdited.Date.getFullYear()}-${toBeEdited.Date.getMonth() + 1}-${toBeEdited.Date.getDate()}`
        })
       }
    }  , [])
    function changeHandeler(inputIndentifier , userText){
        // console.log(userText)
        setUserValues((currValues) => {
            return {
                ...currValues,
                [inputIndentifier] : userText
            }
        })
        setIsValid((currValues) => {
            return {
                ...currValues,
                [inputIndentifier] : true
            }
        })
        
    }
    function submitHandeler(){
        console.log('userValues' , userValues)
        let expenseData = {
            amount : +userValues.amount,
            description : userValues.description,
            Date : new Date(userValues.Date)
        }
        console.log('expenseData' , expenseData)
     const amountIsValid = !isNaN(userValues.amount) && userValues.amount > 0
     const dateIsValid = userValues.Date.toString() !== 'Invalid Date'
     console.log("dateIsValid" , dateIsValid , userValues.Date.toString())
     const descriptionIsValid = userValues.description.length > 0
     if(!amountIsValid || !dateIsValid || !descriptionIsValid){
        
        setIsValid({
            amount : amountIsValid,
            description : descriptionIsValid,
            Date : dateIsValid
        })
       
        return ;
     }
        onSubmit(expenseData)
    }

    

    return (
        <View>
        <View>
            <View style={styles.sideBySide}>

            <Input label='Amount' inputProps={{
                keyboardType : 'decimal-pad',
                onChangeText : changeHandeler.bind(this , 'amount'),
                value : userValues.amount,
               
            }} style={styles.flex}  invalid={!isValid.amount} />
            <Input label='Date' inputProps={{
                placeholder : 'YYYY-MM-DD',
                maxLength : 10,
                onChangeText : changeHandeler.bind(this , 'Date'),
                value : userValues.Date,
                
               
            }} style={styles.flex}  invalid={!isValid.Date} />
            </View>
            <Input label='Description' inputProps={{
                autoCorrect : false,
                multiline : true,
                onChangeText : changeHandeler.bind(this , 'description'),
                value : userValues.description,
                
                
            }} invalid={!isValid.description} />
           
            {formIsInvalid && <Text style={styles.error}>Please provide Valid Inputs</Text>}
             <View style={styles.ButtonsContainer}>
            <Button onPress={submitHandeler}>{submitButtonLabel}</Button>
            <Button onPress={onCancel}>Cancel</Button>
        </View>
       
        </View>
        
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    sideBySide : {
        flexDirection : 'row',
        
    },
    flex: {
        flex: 1
    },
    ButtonsContainer: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        marginTop : 10
    },
    error : {
        color : GlobalStyles.colors.error500,
        fontWeight : 'bold',
        textAlign : 'center'
    }
})
