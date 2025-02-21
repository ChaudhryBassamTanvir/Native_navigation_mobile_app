import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

type ProductProps = PropsWithChildren<{
    product: Product;
}>;

const ProductItem = ({ product }: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{product.rating} ★</Text>
          </View>
          <Text style={styles.ratingCount}>({product.ratingCount.toLocaleString()})</Text>
        </View>

        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.originalPrice}>{product.originalPrice.toLocaleString()} PKR</Text>
          <Text style={styles.discountPrice}>{product.discountPrice.toLocaleString()} PKR</Text>
          <Text style={styles.offerPercentage}>-{product.offerPercentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    marginBottom: 5,
  },
  rating: {
    backgroundColor: '#ffcc00',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 5,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ratingCount: {
    color: '#666',
    fontSize: 14,
  },
  priceContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  originalPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e63946',
    marginRight: 10,
  },
  offerPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
  },
});
