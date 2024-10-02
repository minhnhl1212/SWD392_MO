import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCartView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const ProductCartView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: "https://nshopvn.com/wp-content/uploads/2019/03/xbee-shield-8M9P-s4-600x600.jpg"}}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product Name</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Supplier</Text>
                    <Text style={styles.price}>$100</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCartView