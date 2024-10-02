import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'

const Heading = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Featured Product</Text>
                <TouchableOpacity>
                    <Ionicons name="grid" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Heading