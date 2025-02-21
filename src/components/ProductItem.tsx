import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'


type ProductProps = PropsWithChildren<{
    product:Product
}>




const ProductItem = ({product}:ProductProps) => {
  return (
    <View style={styles.container}>
<Image source={{uri:product.imageUrl}}

style={styles.image}
/>


<View >
<Text style={styles.name}>
    {product.name}
</Text>


<View style={[styles.rowContainer,styles.ratingContainer]}>
<View style={styles.rating}>
    <Text style={styles.ratingText}>{product.rating} *</Text>
</View>
<View>
    <Text>({product.ratingCount.toLocaleString()})</Text>
</View>

</View>
<View style={[styles.rowContainer,styles.priceContainer]}>

<Text style={styles.originalPrice}>
{product.originalPrice.toLocaleString()} PKR


</Text>
<Text style={styles.discountPrice}>
{product.discountPrice.toLocaleString()} PKR
</Text>
<Text style={styles.offerPercentage}>
{product.offerPercentage} %
</Text>


</View>


</View>


    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})