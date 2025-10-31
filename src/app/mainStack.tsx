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
        </Stack.Navigator>

    )
}

