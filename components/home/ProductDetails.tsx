// app/product/[id].tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

// This would normally come from an API
const getProductById = (id: string) => {
  const products = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      price: 70,
      unit: 'kg',
      farmer: "John's Farm",
      farmerRating: 4.8,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
      distance: '2.5 km',
      category: 'Vegetables',
      description: 'Freshly harvested tomatoes grown without chemical pesticides. Perfect for salads and cooking.',
      availability: 'In stock',
      harvestedDate: '2 days ago',
      deliveryOptions: ['Pickup', 'Delivery within 5km'],
    },
    {
      id: 2,
      name: 'Organic Potatoes',
      price: 40,
      unit: 'kg',
      farmer: 'Green Valley',
      farmerRating: 4.5,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
      distance: '4.2 km',
      category: 'Vegetables',
      description: 'Locally grown organic potatoes. Great for frying, boiling or roasting.',
      availability: 'In stock',
      harvestedDate: '3 days ago',
      deliveryOptions: ['Pickup only'],
    },
    // Other products would be here
  ];
  
  return products.find(p => p.id === Number(id));
};

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(id as string);
  
  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const addToCart = () => {
    // This would normally update a cart context or make an API call
    alert(`Added ${quantity} ${product.unit} of ${product.name} to cart`);
  };
  
  const contactFarmer = () => {
    // This would normally open a chat or messaging screen
    alert(`Contacting ${product.farmer}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{product.name}</Text>
        </View>
        
        <Image source={{ uri: product.image }} style={styles.image} />
        
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
          </View>
          
          <Text style={styles.price}>
            Ksh {product.price} /{product.unit}
          </Text>
          
          <View style={styles.farmerInfo}>
            <Text style={styles.farmerName}>{product.farmer}</Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{product.farmerRating}</Text>
            </View>
          </View>
          
          <Text style={styles.distanceText}>{product.distance} away</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
          
          <View style={styles.divider} />
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Availability:</Text>
            <Text style={styles.detailValue}>{product.availability}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Harvested:</Text>
            <Text style={styles.detailValue}>{product.harvestedDate}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Delivery:</Text>
            <Text style={styles.detailValue}>{product.deliveryOptions.join(', ')}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.quantitySelector}>
            <Text style={styles.quantityLabel}>Quantity:</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <AntDesign name="minus" size={18} color="#333" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <AntDesign name="plus" size={18} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>Ksh {product.price * quantity}</Text>
          </View>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.contactButton} onPress={contactFarmer}>
              <Text style={styles.contactButtonText}>Contact Farmer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: '#e9f5e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    color: '#16a34a',
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 12,
  },
  farmerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  farmerName: {
    fontWeight: '500',
    fontSize: 16,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: '500',
  },
  distanceText: {
    color: '#6b7280',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  detailLabel: {
    width: 100,
    fontWeight: '500',
    fontSize: 16,
  },
  detailValue: {
    flex: 1,
    fontSize: 16,
    color: '#4b5563',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityLabel: {
    width: 100,
    fontWeight: '500',
    fontSize: 16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  totalLabel: {
    width: 100,
    fontWeight: '600',
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactButton: {
    flex: 1,
    backgroundColor: '#e9f5e9',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  contactButtonText: {
    color: '#16a34a',
    fontWeight: '600',
    fontSize: 16,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#16a34a',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  backButtonText: {
    color: '#16a34a',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});