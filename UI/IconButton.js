import { Pressable, StyleSheet, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
function IconButton({name , size , color , onPress}){
    return <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
        <View style={styles.IconContainer}>
        <AntDesign name={name} size={size} color={color} />
        </View>
    </Pressable>
}

export default IconButton

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.50
    },
    IconContainer : {
        marginHorizontal : 15
    }
})