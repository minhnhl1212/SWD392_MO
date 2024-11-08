import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './productDetail.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductDetail = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < 5)
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1)
      setCount(count - 1)
  }

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

  useEffect(() => {
    checkExistingUser();
  }, []);

  const addToCart = async () => {
    try {
      const data = {
        userId: userData._id,
        quantity: count,
        cartItem: item._id,
      }
      const response = await axios.post('http://10.0.2.2:3000/api/carts', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <View style={styles.detail}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name="star"
                size={24}
                color={index < 4 ? COLORS.primary : COLORS.secondary}
              />
            ))}
            <Text style={styles.ratingText}>(3.0)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} color={COLORS.primary} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: "row"}}>
              <Ionicons name="location-outline" size={20} color={COLORS.primary} />
              <Text>   {item.product_location}   </Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} color={COLORS.primary} />
              <Text>   Free Delivery   </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => addToCart()} style={styles.cartButton}>
            <Text style={styles.cartTitle}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail