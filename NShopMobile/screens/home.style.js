import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 20
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    brand: {
        fontFamily: "bold",
        fontSize: SIZES.xLarge,
        color: COLORS.primary 
    },
    cartAlert: {
        position: "absolute",
        bottom: 15,
        width: 12,
        height: 12,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "red",
        justifyContent: "center",
        zIndex: 999,
    },
});

export default styles;