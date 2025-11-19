import Logo from "@/src/components/logo";
import { StyleGlo } from "@/src/styles/styles_global";
import { LogBox, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function Menu() {
    return (

        <View style={[StyleGlo.container, StyleGlo.centrer]}>
            <Logo L={18} />

            <View style={style.bloblock}>

                <TextInput style={[StyleGlo.Title2, StyleGlo.blockForm]}
                    placeholder="Rechercher un objet"
                />

                <View style={style.enfBlock}>
                    <TouchableOpacity style={StyleGlo.blockForm}>
                        <Text style={[StyleGlo.Title2, StyleGlo.title1_Gras]} >Vos adresses </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleGlo.blockForm}>
                        <Text style={[StyleGlo.Title2]}>Vos Caisses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleGlo.blockForm}>
                        <Text style={[StyleGlo.Title2]}>Profil</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    bloblock: {
        marginTop: 7,
        height: "40%",

    },

    enfBlock: {
        gap: "5%",
        display: "flex",
        justifyContent: "space-evenly",
        // backgroundColor: "green",
        flex: 1,

        // borderWidth: 1,

    }
})