// app/(tabs)/cart.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from "@/components/home/Navbar";

interface CartItem {
  id: number;
  name: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
  farmer: string;
}

export default function Cart() {
  // Mock data - this would typically come from a state management system or API
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Fresh Tomatoes',
      price: 70,
      unit: 'kg',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
      farmer: "John's Farm",
    },
    {
      id: 2,
      name: 'Organic Potatoes',
      price: 40,
      unit: 'kg',
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
      farmer: 'Green Valley',
    },
    {
      id: 6,
      name: 'Ripe Bananas',
      price: 50,
      unit: 'kg',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e',
      farmer: 'Tropical Farms',
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      // Remove item if quantity is less than 1
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      // Update quantity
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    // Handle checkout logic here
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemFarmer}>{item.farmer}</Text>
        <Text style={styles.itemPrice}>Ksh {item.price} / {item.unit}</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            onPress={() => updateQuantity(item.id, item.quantity - 1)}
            style={styles.quantityButton}
          >
            <AntDesign name="minus" size={16} color="#333" />
          </TouchableOpacity>
          
          <Text style={styles.quantityText}>{item.quantity}</Text>
          
          <TouchableOpacity 
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
            style={styles.quantityButton}
          >
            <AntDesign name="plus" size={16} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.itemTotal}>
        <Text style={styles.itemTotalText}>Ksh {item.price * item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 0)}>
          <AntDesign name="delete" size={20} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.heading}>Your Cart</Text>
        
        {cartItems.length === 0 ? (
          <View style={styles.emptyCart}>
            <AntDesign name="shoppingcart" size={64} color="#d1d5db" />
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
            <TouchableOpacity style={styles.browseButton}>
              <Text style={styles.browseButtonText}>Browse Products</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              style={styles.list}
            />
            
            <View style={styles.summaryContainer}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Items ({cartItems.length})</Text>
                <Text style={styles.summaryValue}>Ksh {getTotalPrice()}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Delivery Fee</Text>
                <Text style={styles.summaryValue}>Ksh 100</Text>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.summaryRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>Ksh {getTotalPrice() + 100}</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.checkoutButton}
                onPress={handleCheckout}
              >
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemFarmer: {
    fontSize: 14,
    color: '#6b7280',
  },
  itemPrice: {
    fontSize: 14,
    color: '#16a34a',
    fontWeight: '500',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 12,
  },
  itemTotal: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 8,
  },
  itemTotalText: {
    fontSize: 16,
    fontWeight: '600',
  },
  summaryContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#4b5563',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  checkoutButton: {
    backgroundColor: '#16a34a',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 16,
    marginBottom: 24,
  },
  browseButton: {
    backgroundColor: '#16a34a',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});