import Logo from "@/src/components/logo";
import { StyleGlo } from "@/src/styles/styles_global";
import { checkMail, checkMdpValide, checknom, checkPrenom, compareMdp } from "@/src/utilis/validation";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function CreatClient() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [mail, setMail] = useState('');
    const [mdp, setMdp] = useState('');
    const [checkMdp, setCheckMdp] = useState('');
    const [erreur, setErreur] = useState({});

    const navigation = useNavigation();


    //function reset
    const resetChamps = () => {
        setNom('');
        setPrenom('');
        setMail('');
        setMdp('');
        setCheckMdp('');
        setErreur({});

    };
    const verif = () => {
        const Erreurs = {
            nom: checknom(nom),
            prenom: checkPrenom(prenom),
            mail: checkMail(mail),
            mdp: checkMdpValide(mdp),
            confMdp: compareMdp(mdp, checkMdp)

        }

        setErreur(Erreurs);

        const validePasErreurs = Object.values(Erreurs).every(e=>e === true);
        if(validePasErreurs){
            console.log("✅c'est reglo")
        }else{
            console.log("✖️ Une erreur est survenue durant l'enregistrement des données");
            
        }
    }

    return (
        <KeyboardAvoidingView
            style={StyleGlo.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                style={StyleGlo.container}
                contentContainerStyle={style.placer}
                keyboardShouldPersistTaps="handled"
            >
                <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                    <Logo />
                </TouchableOpacity>
                <View>
                    <Text style={[StyleGlo.Title1, StyleGlo.title1_Gras]}>Créer un compte</Text>
                    <View style={StyleGlo.blockForm}>
                        <View>
                            <Text style={[StyleGlo.fontRed]}>{erreur.nom ? erreur.nom : ""}</Text>
                            <TextInput
                                style={[style.input, style.text]}
                                placeholder="Nom"
                                value={nom}
                                onChangeText={setNom}
                            />
                        </View>
                        <View>
                            <Text style={[StyleGlo.fontRed]}>{erreur.prenom ? erreur.prenom : ""}</Text>
                            <TextInput
                                style={[style.input, style.text]}
                                placeholder="Prenom"
                                value={prenom}
                                onChangeText={setPrenom}
                            />
                        </View>
                        <View>
                            <Text style={[StyleGlo.fontRed]}>{erreur.mail ? erreur.mail : ""}</Text>
                            <TextInput
                                style={[style.input, style.text]}
                                placeholder="Email"
                                value={mail}
                                onChangeText={setMail}
                            />
                        </View>
                        <View>
                            <Text style={[StyleGlo.fontRed]}>{erreur.mdp ? erreur.mdp : ""}</Text>
                            <TextInput
                                style={[style.input, style.text]}
                                placeholder="Mot de passe"
                                secureTextEntry={true}
                                value={mdp}
                                onChangeText={setMdp}
                            />
                        </View>
                        <View>
                            <Text style={[StyleGlo.fontRed]}>{erreur.confMdp ? erreur.confMdp : ""}</Text>
                            <TextInput
                                style={[style.input, style.text]}
                                placeholder="confirmer mot de passe"
                                secureTextEntry={true}
                                value={checkMdp}
                                onChangeText={setCheckMdp}
                            />
                        </View>
                        <View style={style.blockbtn}>
                            <TouchableOpacity style={style.btnDanger} onPress={resetChamps}>
                                <Text style={[StyleGlo.Title2, style.btnText]}>Annuler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.btnSuccess]} onPress={verif}>
                                <Text style={[StyleGlo.Title2, style.btnText]}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    placer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
       
    },
    input: {
        // borderWidth: 0.1,
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },

    blockbtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
    },

    btnDanger: {
        backgroundColor: "#b31515ff",
        borderRadius: 10,
        padding: 15,
    },

    btnSuccess: {
        backgroundColor: "#124eaeff",
        borderRadius: 10,
        padding: 15,
    },

    btnText: {
        color: "rgb(255,255,255)",
    }
})