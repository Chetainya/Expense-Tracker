import { Pressable, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../Constants/Style"
import { dateFormatter } from "../utils/date"

function ExpenseItem({description , amount , date}){
    return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
    <View style={styles.container}>
        <View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{dateFormatter(date)}</Text>

        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}Rs</Text>
        </View>
    </View>
    </Pressable>
    )
}
export default ExpenseItem

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : GlobalStyles.colors.primary200,
        margin : 10,
        padding : 10,
        borderRadius : 10,
        alignItems : 'center',
        elevation : 6,
        shadowColor : 'gray',
        shadowOffset : {width : 5 , height : 5},
        shadowOpacity : 0.25,
        shadowRadius : 10
    },
    description : {
        fontWeight : 'bold',
        color : 'white'
    },
    date : {
        color : 'white'
    },
    amount : {
       
        color : 'black',
        fontWeight : 'bold',
        padding : 10,
       
    },
    amountContainer : {
        backgroundColor : 'white',
        borderRadius : 10
    },
    pressed : {
        opacity : 0.50
    }
})