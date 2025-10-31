import { StyleGlo } from "@/src/styles/styles_global";
import { Text, View } from "react-native";

export default function Accueil(){
    return(
        <View style={[StyleGlo.container, StyleGlo.centrer]}>
            <Text>
                Gest-Stock
            </Text>
        </View>
    )
}