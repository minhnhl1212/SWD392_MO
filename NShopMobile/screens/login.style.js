import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'

const styles = StyleSheet.create({
    cover: {
        height: SIZES.height/3,
        width: SIZES.width-60,
        resizeMode: 'contain',
        marginBottom: SIZES.xxLarge
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.xLarge-1,
        color: COLORS.primary,
        alignItems: 'center',
        marginBottom: SIZES.xxLarge
    },
    wrapper: {
        marginBottom: 10,
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'right'
    },
    inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    }),
    iconStyle: {
        marginRight: 10
    },
    errorMessage: {
        color: COLORS.red,
        fontFamily: 'regular',
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall
    },
    registration: {
        fontSize: SIZES.medium,
        textAlign: 'center'
    },
})

export default styles
