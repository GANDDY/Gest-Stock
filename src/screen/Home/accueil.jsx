import Logo from "@/src/components/logo";
import { StyleGlo } from "@/src/styles/styles_global";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, View } from "react-native";

export default function Accueil() {

    const navigation = useNavigation();

    return (
        <View style={[StyleGlo.container, StyleGlo.centrer]}>
            <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
                <Logo L={35} />
            </TouchableOpacity>
        </View>
    )
}