import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './newRivals.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'
import { Button, ProductList } from '../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import CartTitle from '../components/cart/CartTitle'

const Cart = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        setUserLogin(false);
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }

  const [cartData, setCartData] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/api/carts/find/${userData._id}`);
      console.log("cart data", response.data);
      setCartId(response.data[0]._id);
      setCartData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    checkExistingUser();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.upperRow} onPress={() => fetchData()}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite} />
          </TouchableOpacity>
          <Text style={styles.heading}>Get Your Cart</Text>
        </TouchableOpacity>

        <FlatList 
          data={cartData?.[0]?.products}
          renderItem={({ item }) => (
            <CartTitle item={item} />
          )}
          style={{ marginHorizontal: 12, marginTop: SIZES.xxLarge + 10 }}
        />
      </View>

    </SafeAreaView>
  )
}

export default Cart

