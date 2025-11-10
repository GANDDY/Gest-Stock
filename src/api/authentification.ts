import { supabase } from "../utilis/supabase";

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
        if (error.message === "user already registered" || error.status === 422) {
            console.log("⚠️ Cet email est déjà utilisé !");
            alert('⚠️ Cet email est déjà utilisé !')
        } else {
            console.log("❌ Erreur d'inscription :", error.message);
        }
        return { data: null, error };
    }

    console.log("✅ Enregistrement Ok");
    console.log("Utilisateur créé :", data.user?.user_metadata, data.user?.action_link);
    // alert(data.user?.user_metadata.nom + "  Un mail de condirmation vous as été envoyé.")
    alert(data.user?.aud);
    alert(data.user?.new_email);


    return { data };


}