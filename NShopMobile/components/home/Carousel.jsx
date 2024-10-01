import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants/theme'

const Carousel = () => {
    const slides = [
        "https://nshopvn.com/fs/banners/6b2cff9c75b64254a59f0120dcd6e826.gif",
        "https://nshopvn.com/fs/banners/515b284519126a448b6525c59a86071d.gif",
        "https://nshopvn.com/wp-content/uploads/2022/11/1-1024x384.png"
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox images={slides}
                circleLoop
                autoplay
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    }
})