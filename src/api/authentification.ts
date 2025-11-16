import { supabase } from "../utilis/supabase";
interface ConnectResult {

    data: any | null;
    error: string | null;
}


// ___________________________________create
export const CreateClient = async (mail: string, mdp: string, nom: string, prenom: string) => {


    const { data, error } = await supabase.auth.signUp({

        email: mail,
        password: mdp,
        options: {
            data: {
                nom: nom,
                prenom: prenom,
            }
        }
    })


    if (error) {
        console.log("❌ Erreur d'inscription :", error.message, data);
        alert(error);
        return { data: null, error };
    }



    const alReadyExists = data?.user && data?.user?.identities?.length === 0; // Vérif que l'émail existe

    if (alReadyExists) {

        alert('⚠️ Cet email est déjà utilisé !')
        return {data: null, error: "email déja utilisé"}
    }



    console.log("DATA:", data);
    console.log("ERROR:", error);
    console.log("✅ Enregistrement Ok");
    alert(data.user?.user_metadata.nom + "  Un mail de confirmation vous as été envoyé.")


    return { data };


}