import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    detail: {
        marginTop: -SIZES.xLarge,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20
    },
    title: {
        width: SIZES.width - 120,
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 6,
        fontFamily: "semibold",
        fontSize: SIZES.large
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 5
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",   
        marginHorizontal: SIZES.large
    },
    ratingText: {
        fontFamily: "medium",
        color: COLORS.gray,
        paddingHorizontal: SIZES.small
    },
    descriptionWrapper: {
        marginTop: SIZES.large*2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large -2,
        color: COLORS.darkGray
    },
    descriptionText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small,
        color: COLORS.gray
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        padding: 5,
        borderRadius: SIZES.large
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width
    },
    cartButton: {
        width: SIZES.width*0.8,
        alignItems: "center",
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12
    },
    cartTitle: {
        marginLeft: SIZES.small,
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;