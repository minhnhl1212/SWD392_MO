import { TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './search.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="Search Product Name"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Search