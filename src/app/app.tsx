import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, View } from "react-native";
import { StyleGlo } from "../styles/styles_global";
import MainStack from "./mainStack";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <View style={StyleGlo.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} translucent/>
            <MainStack Stack={Stack} />

        </View>
    )
}

