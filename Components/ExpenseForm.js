import { StyleSheet, View } from "react-native"
import Input from "./Input"

function ExpenseForm(){

    return (
        <View>
            <View style={styles.sideBySide}>

            <Input label='Amount' inputProps={{
                keyboardType : 'decimal-pad'
            }} style={styles.flex} />
            <Input label='Date' inputProps={{
                placeholder : 'DD-MM-YYYY',
                maxLength : 10
            }} style={styles.flex} />
            </View>
            <Input label='Description' inputProps={{
                autoCorrect : false,
                multiline : true,
                
            }} />
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
    }
})
