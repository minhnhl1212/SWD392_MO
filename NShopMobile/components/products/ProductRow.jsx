import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme';
import ProductCartView from './ProductCartView';

const ProductRow = () => {
    const products = [1, 2, 3, 4];

    return (
        <View style={{ marginTop: SIZES.small, marginHorizontal: SIZES.small }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductCartView />
                )}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium}}
            />
        </View>

    )
}

export default ProductRow