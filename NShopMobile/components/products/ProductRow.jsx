import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import ProductCartView from './ProductCartView';
import styles from './productRow.style';
import useFetch from '../../hooks/useFetch';

const ProductRow = ({min, max}) => {
    const { data, isLoading, error } = useFetch();
    // console.log(data);
    // const products = [1, 2, 3, 4];
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={item => item._id}
                    renderItem={({ item, index }) => {
                        if (index >= min && index <= max ) { // Skip the first item by checking the index
                            return <ProductCartView item={item} />;
                        }
                        return null; // Don't render anything for the first item
                    }}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.xSmall}}
                />
            )}
        </View>
    )
}

export default ProductRow