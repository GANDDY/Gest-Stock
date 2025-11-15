import { supabase } from "../utilis/supabase"
interface ConnectResult {

    data: any | null;
    error: string | null;
}



export const connect = async (mail: string, mdp: string) => {

    try {
        const { data, error } = await supabase.auth.signInWithPassword({

            email: mail,
            password: mdp,

        })

        if (error) {
            console.log('Identifiant ou mot de passe incorrecte !');
            alert('Mot de passe ou Identifiannt incorrecte !')
            return { data: null, error };
        }

        alert("Identification ok ✅")
        return { data };
        
    } catch (err: any) {
        console.error('Erreur lors de la connexion :', err);
        alert('Une erreur est survenue lors de la connexion.');
        return { data: null, error: err.message || 'Erreur inconnue' };
    }

};