import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme';
import ProductCartView from './ProductCartView';
import styles from './productRow.style';

const ProductRow = () => {
    const products = [1, 2, 3, 4];

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductCartView />
                )}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.xSmall}}
            />
        </View>
    )
}

export default ProductRow