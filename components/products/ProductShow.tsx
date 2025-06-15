import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

interface Photo {
  id: number;
  image: string;
  uploaded_at: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  quantity: string;
  price: string;
  location: string;
  availability_date: string;
  unit: string;
  status: string;
  photos?: Photo[];
  image?: string;
}

const ProductShow: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://10.0.2.2:8000/api/products/');
      console.log('Products response:', response.data);
      setProducts(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productCard}>
      {item.photos && item.photos.length > 0 && (
        <Image 
          source={{ uri: `http://10.0.2.2:8000${item.photos[0].image}` }} 
          style={styles.productImage} 
          resizeMode="cover"
        />
      )}
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>₹{item.price} / {item.unit}</Text>
        <Text style={styles.productLocation}>{item.location}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.productAvailability}>
          Available: {new Date(item.availability_date).toLocaleDateString()}
        </Text>
        <Text style={styles.productQuantity}>
          Quantity: {item.quantity} {item.unit}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="green" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchProducts}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.noProductsText}>No products available</Text>
        <Text style={styles.noProductsSubText}>
          Products you add will appear here
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Products</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onRefresh={fetchProducts}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    padding: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: 'green',
    marginBottom: 6,
  },
  productLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productAvailability: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 14,
    color: '#666',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  noProductsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  noProductsSubText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default ProductShow;