import { TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import styles from './searchTitle.style'
import { useNavigation } from '@react-navigation/native'

const SearchTitle = ({item}) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', {item})}>
                <View style={styles.image}>
                    <Image
                        source={{uri: item.imageUrl}}
                        style={styles.productImage}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.searchTitle}>{item.title}</Text>
                    <Text style={styles.searchDetail}>{item.product_location}</Text>
                    <Text style={styles.searchDetail}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchTitle

