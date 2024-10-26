import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    container: {
        alignItems: 'center',
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small/2
    },
    seperator: {
        height: 16,
    }
})

export default styles;