import { connect } from "@/src/api/connexion";
import Logo from "@/src/components/logo";
import { StyleGlo } from "@/src/styles/styles_global";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Connexion() {
    const navigation = useNavigation();

    const route = useRoute();
    const { mail, mdp } = route.params ?? "";




    const connecter = async () => {


        if (!mail || !mdp) {
            alert("Veuillez remplir tous les champs !");
            return;
        }


        try {
            const result = await connect(mail, mdp);
            if (result.error) {
                console.log('Erreur de connexion : ', result.error);
                alert(result.error)
                return;
            }

            console.log('Utilisateur connécté : ');
            navigation.navigate("Menu", { user: result.data.user });

        } catch (error) {
            console.error('Erreur inattendue :', error);
            alert('Une erreur est survenue lors de la connexion.', error);
        }
    };





    return (
        <View style={[StyleGlo.container, style.placer]}>
            <Logo />
            <View>
                <Text style={[StyleGlo.Title1, StyleGlo.title1_Gras,]}>Page de connexion</Text>
                <View style={[StyleGlo.blockForm, StyleGlo.fond2]}>
                    <TouchableOpacity onPress={() => navigation.navigate("CreatClient")}>
                        <Text style={[StyleGlo.Title2, style.add]}>Créer un compte</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={StyleGlo.Title2}>Identifiant</Text>
                        <TextInput
                            style={[StyleGlo.fond2, style.input]}
                            placeholder="Entrer Votre Identifiant"
                            value={mail ? mail : null}
                        />
                    </View>
                    <View>
                        <Text style={StyleGlo.Title2}>Mot de passe</Text>
                        <TextInput
                            style={[StyleGlo.fond2, style.input]}
                            placeholder="Entrer votre mot de passe"
                            secureTextEntry
                            value={mdp ? mdp : null}
                        />
                    </View>
                    <TouchableOpacity style={style.button} onPress={connecter}>
                        <Text style={[StyleGlo.Title2, style.btnText]}>Se connecter</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    placer: {
        flex: 1,
        // backgroundColor:"purple",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    add: {
        textAlign: "right",
        color: "#64748B",
    },

    input: {
        borderWidth: 0.1,
        borderRadius: 5,
    },

    button: {
        backgroundColor: "#317df8ff",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",

    },
    btnText: {
        color: "rgb(255,255,255)",
        textAlign: "center",
    }
})