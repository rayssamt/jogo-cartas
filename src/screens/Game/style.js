import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    viewCartas: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    cartas: {
        width: 120, 
        height: 120, 
        resizeMode: "contain",
    },
});