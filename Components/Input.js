import { StyleSheet, TextInput, View , Text } from "react-native"
import { GlobalStyles } from "../Constants/Style"

function Input({label , inputProps , style , invalid }){
    console.log(invalid)
    const isMultiline = inputProps.multiline

    return <View style={[styles.InputContainer , style && style ]}>
        <Text style={[styles.label]}>{label}</Text>
        <TextInput  style={[styles.input , isMultiline ? styles.multiline : null  , invalid ? styles.invalidOutline && styles.invalidBackGround : '']} {...inputProps} />
    </View>
}

export default Input

const styles = StyleSheet.create({
    InputContainer : {
        padding : 10,
        margin : 10,
        gap : 10,
        
    },
    label : {
        fontWeight : 'bold',
        fontSize : 12,
        color : 'white'

    },
    input : {
        backgroundColor : GlobalStyles.colors.primary50,
        borderRadius : 10,
        padding : 5
    },
    multiline : {
        minHeight : 100
    },
    invalidOutline : {
        borderWidth : 1,
        borderColor : GlobalStyles.colors.error500
    },
    invalidBackGround : {
        backgroundColor : GlobalStyles.colors.error50
    }
})