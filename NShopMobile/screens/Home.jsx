import { ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './home.style'
import { Ionicons } from '@expo/vector-icons'
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'

const Home = () => {
  return (
    <SafeAreaView>
        <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                <Ionicons name="" size={24} color="black" />

                <Text style={styles.brand}>NShop</Text>

                <View style={{ alignItems: "flex-end" }}>
                    <View style={styles.cartAlert}></View>

                    <TouchableOpacity>
                        <Ionicons name="cart-outline" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView>
            <Welcome />
            <Carousel />
            <Heading />
            <ProductRow />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home