import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.xLarge -2
    }
});

export default styles;