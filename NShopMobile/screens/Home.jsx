import { ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './home.style'
import { Ionicons } from '@expo/vector-icons'
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    const [userLogin, setUserLogin] = useState(false);
    useEffect(() => {
        checkExistingUser();
    }, []);

    const checkExistingUser = async () => {
        const id = await AsyncStorage.getItem('id');
        const userId = `user${JSON.parse(id)}`;

        try {
            const currentUser = await AsyncStorage.getItem(userId);

            if (currentUser !== null) {
                const parsedData = JSON.parse(currentUser);
                setUserData(parsedData);
                setUserLogin(true);
            }
        } catch (error) {
            console.log('Error retrieving data: ', error);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name="" size={24} color="black" />

                    <Text style={styles.brand}>NShop </Text>

                    <View style={{ alignItems: "flex-end" }}>
                        <View style={styles.cartAlert}></View>

                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Ionicons name="cart-outline" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome />
                <Carousel />
                <Heading title="New Rivals    " />
                <ProductRow min='0' max='2' />
                <Heading title="Featured Product    "/>
                <ProductRow min='3' max='6' />
                <View style={{ height: 150 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home