
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../Constants/Style";

function Button({ onPress , children }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={({pressed}) => pressed &&  styles.pressed }>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor : GlobalStyles.colors.primary400,
        
        padding : 10,
        borderRadius : 10,
    },
    buttonText : {
        color : 'white',
        fontWeight : 'bold',
        textAlign : 'center'
    },
    container : {
        minWidth : 150
    },
    pressed : {
        opacity : 0.50
    }
})

