import { ActivityIndicator , StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../Constants/Style";

function ErrorOverlay({message}){
    return <View style={styles.container}>
        <Text>An Error Occured</Text>
        <Text>{message}</Text>
    </View>
}

export default ErrorOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : GlobalStyles.colors.primary100,
        justifyContent : 'center',
        alignItems : 'center'
        
    }
})