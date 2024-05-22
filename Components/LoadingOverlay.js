import { ActivityIndicator , StyleSheet } from "react-native";
import { GlobalStyles } from "../Constants/Style";

function LoadingOverlay(){
    return <ActivityIndicator style={styles.container} color='white' size='large' />
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : GlobalStyles.colors.primary100
        
    }
})