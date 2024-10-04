import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetail.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'

const ProductDetail = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < 5)
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1)
      setCount(count - 1)
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: "https://nshopvn.com/wp-content/uploads/2019/03/xbee-shield-8M9P-s4-600x600.jpg" }}
        style={styles.image}
      />
      <View style={styles.detail}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$60.88</Text>
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
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt earum saepe tenetur ducimus odio, dolorum culpa, nisi dolores nesciunt totam iusto praesentium iure debitis! Ullam saepe nam itaque veritatis?</Text>
        </View>
        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: "row"}}>
              <Ionicons name="location-outline" size={20} color={COLORS.primary} />
              <Text>   Hanoi, Vietnam   </Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} color={COLORS.primary} />
              <Text>   Free Delivery   </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartButton}>
            <Text style={styles.cartTitle}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail