import { TouchableOpacity, View, Image, Text, Alert } from 'react-native'
import React from 'react'
import styles from './cartTitle.style'
import { useNavigation } from '@react-navigation/native'
import Button from '../Button'
import axios from 'axios'

const CartTitle = ({ item }) => {
    const navigation = useNavigation();

    const userDeleteItem = async () => {
        try {
            console.log(`http://10.0.2.2:3000/api/carts/${item._id}`)
            const response = await axios.delete(`http://10.0.2.2:3000/api/carts/${item._id}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteItem = () => {
        Alert.alert(
            "Clear Your Item",
            "Are you sure you want to clear your item?",
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
                { text: "Continue", onPress: () => userDeleteItem() },
                // { defaultIndex: 1 }
            ]
        )
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', { item })}>
                <View style={styles.image}>
                    <Image
                        source={{ uri: item.cartItem.imageUrl }}
                        style={styles.productImage}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.searchTitle}>{item.cartItem.title}</Text>
                    <Text style={styles.searchDetail}>Supplier: {item.cartItem.supplier}</Text>
                    <Text style={styles.searchDetail}>Price: {item.cartItem.price}</Text>
                    <Text style={styles.searchDetail}>Quantity: {item.quantity}</Text>
                    <Button loader={false} title="Delete item" onPress={() => deleteItem()} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CartTitle

