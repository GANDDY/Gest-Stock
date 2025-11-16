import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

export default function Logo({ L = 24 }) {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scale, {
                    toValue: 2,     // zoom avant
                    duration: 2200,
                    useNativeDriver: true,
                }),
                Animated.timing(scale, {
                    toValue: 1,       // zoom arrière
                    duration: 2200,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);
    const rotateY = scale.interpolate({
        inputRange: [1, 2],
        outputRange: ["0deg", "40deg"],  // effet 3D léger
    });
    return (
        <Animated.View style={{ transform: [
            { scale: scale },
             {rotateY: rotateY},
              {perspective:1000}
              ],
            
              }}>
            <View style={style.container}>
                <Text style={[style.textLogo, { fontSize: L }]}>Gest-stock</Text>
            </View>
        </Animated.View>
    );
}

const style = StyleSheet.create({
    container: {
        // backgroundColor: "rgba(84, 68, 68, 1)",
    },

    textLogo: {
        fontWeight: "bold",
        color: "#3B82F6",
    },
});
