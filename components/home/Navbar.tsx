import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Cart from '@/components/cart'; 
export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Farm Connect</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        accessibilityLabel="View Cart"
      >
        <AntDesign name="shoppingcart" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'green',
    width: '100%',
    height: 70,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
