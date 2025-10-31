

//__________________________________________function de check nom

export const checknom = (nom: string) => {
    const regexNom = /^[a-zA-Z.-]{3,}$/;

    if (typeof nom === 'string') {
        if (!nom.trim()) {
            return "Remplir le champs nom"
        }
    }

    if (!regexNom.test(nom)) {
        return "Entrer un nom: minimum 3 lettres, sans chiffres et carractère spéciale";
    }

    return true;
};

//___________________________________________function de check prenom

export const checkPrenom = (prenom: string) =>{
    const regexPrenom = /^[a-zA-Z.-]{3,}$/;
     if (typeof prenom === 'string') {
        if (!prenom.trim()) {
            return "Remplir le champs prenom"
        }
    }

    if (!regexPrenom.test(prenom)) {
        return "Entrer un prenom: minimum 3 lettres, sans chiffres et carractère spéciale";
    }
    return true;
}



/// _________________________________________function de check mail
export const checkMail = (mail: string) => {
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (typeof mail === 'string') {
        if (!mail.trim()) {
            return "Remplir le champs email"
        }
    }
    if (!regexMail.test(mail)) {
        return "Adresse mail non valide !!"
    }
    return true;
};


//____________________________________________function de check mot de passe
export const checkMdpValide = (mdp:string) =>{
    // const regexMdp = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if(typeof mdp === 'string'){

        if(!mdp.trim()){
            return "un mot de passe requis.";
        }
    }
    if (mdp.length < 8){
        return "Le mot de passe doit faire minimum 8 caratères."
    }
    if(!(/^(?=.*[A-Z])/).test(mdp)){
        return "Il faut un minimum une majuscule.";
    }
    if(!(/^(?=.*[\W_])/).test(mdp)){
        return "Il faut mettre un carratère spéciale."
    }
    return true;
        
    };



export const compareMdp = (mdp : string, confirmMdp: string ) =>{
    if(typeof confirmMdp === 'string'){

        if(!confirmMdp.trim()){
            return "un mot de passe requis.";
        }
    }
    if (mdp !== confirmMdp){
        return "Les mots de passe ne sont identiques.";
    }
    return true;
}
