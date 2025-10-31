import { StyleSheet, Text, View } from "react-native";


export default function Logo({L=24}) {


    return(
        <View style={style.container}>
            <Text style={[style.textLogo, {fontSize:L}]}>Gest-stock</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        // backgroundColor:"rgba(84, 68, 68, 1)",
    },

    textLogo:{
        fontWeight:"bold",
        color: "#3B82F6",
    }
})

