import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Heading = ({title}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title} </Text>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Ionicons name="grid" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Heading