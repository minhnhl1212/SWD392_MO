import { TouchableOpacity, View, TextInput, SafeAreaView, Image, FlatList, Text } from 'react-native'
import React, {useState} from 'react'
import styles from './search.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'
import axios from 'axios'
import SearchTitle from '../components/products/SearchTitle'

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handlePress = async() => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/api/products/search/${searchKey}`);
      console.log("-----------------------------");
      console.log(response.data);
      console.log("-----------------------------");
      setSearchResults(response.data);
    } catch (error) {
      console.error("Failed to get products: ", error);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Search Product Name"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handlePress()}>
          <Feather name="search" size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images/Pose23.png')}
            style={styles.searchImage}
            resizeMode="contain"
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            // <Text>{item.title}</Text>
            <SearchTitle item={item} />
          )}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  )
}

export default Search