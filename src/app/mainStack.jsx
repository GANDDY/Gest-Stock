import Connexion from "../screen/auth/login";
import CreatClient from "../screen/auth/signUp";
import Accueil from "../screen/Home/accueil";


export default function exportexportMainStack({Stack}) {
    
    
    return (
        <Stack.Navigator
            initialRouteName="Accueil"
            screenOptions={{
                headerShown: false,
                animation: "fade",
                animationDuration: 800
            }}>


            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Connexion" component={Connexion} />
            <Stack.Screen name="CreatClient" component={CreatClient} />
        </Stack.Navigator>

    )
}

