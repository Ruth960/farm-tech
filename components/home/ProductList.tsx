import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function ProductList() { 
  const products = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      price: 70,
      unit: 'kg',
      farmer: "John's Farm",
      image:
        'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '2.5 km',
    },
    {
      id: 2,
      name: 'Organic Potatoes',
      price: 40,
      unit: 'kg',
      farmer: 'Green Valley',
      image:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '4.2 km',
    },
    {
      id: 3,
      name: 'Fresh Carrots',
      price: 60,
      unit: 'bunch',
      farmer: 'Fresh Fields',
      image:
        'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '3.7 km',
    },
    {
      id: 4,
      name: 'Organic Eggs',
      price: 370,
      unit: 'dozen',
      farmer: 'Happy Hens',
      image:
        'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '5.1 km',
    },
    {
      id: 5,
      name: 'Sweet Corn',
      price: 80,
      unit: 'ear',
      farmer: 'Sunny Acres',
      image:
        'https://images.unsplash.com/photo-1606709923830-244e662998a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '6.0 km',
    },
    {
      id: 6,
      name: 'Ripe Bananas',
      price: 50,
      unit: 'kg',
      farmer: 'Tropical Farms',
      image:
        'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '7.5 km',
    },
    {
      id: 7,
      name: 'Fresh Apples',
      price: 90,
      unit: 'kg',
      farmer: 'Orchard Valley',
      image:
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '8.2 km',
    },
    {
      id: 8,
      name: 'Organic Spinach',
      price: 120,
      unit: 'bunch',
      farmer: 'Leafy Greens',
      image:
        'https://images.unsplash.com/photo-1599825442567-c25f9b48c908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '9.0 km',
    },
      {
      id: 9,
      name: ' Oranges',
      price: 75,
      unit: 'kg',
      farmer: 'Citrus Grove',
      image: 'https://images.unsplash.com/photo-1547514301-42534f3c6a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      distance: '10.5 km',
      },
      {
      id: 10,
      name: 'Farm Fresh Milk',
      price: 150,
      unit: 'litre',
      farmer: 'Dairy Delight',
      image: 'https://images.unsplash.com/photo-1604537353950-9186d96d9976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      distance: '11.8 km',
      },
      {
      id: 11,
      name: 'Honey',
      price: 450,
      unit: 'jar',
      farmer: 'Bee keepers',
      image: 'https://images.unsplash.com/photo-1598886361327-046645c36192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      distance: '12.3 km',
      },
      {
      id: 12,
      name: 'Avocado',
      price: 20,
      unit: 'piece',
      farmer: 'Avocado farms',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Favocado-basket&psig=AOvVaw1HPqDEmyIalOmyzKa3J2WQ&ust=1743534070888000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCQxN2AtYwDFQAAAAAdAAAAABAE',
      distance: '13.1 km',
      },
      {
      id: 13,
      name: 'Fresh Ginger',
      price: 180,
      unit: 'kg',
      farmer: 'Spice Land',
      image: 'https://images.unsplash.com/photo-1605298533168-8f8b8949826d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2luZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      distance: '14.7 km',
      },
      {
      id: 14,
      name: 'Onions',
      price: 65,
      unit: 'kg',
      farmer: 'Veggie farm',
      image: 'https://images.unsplash.com/photo-1559218766-3b5622144776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25pb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      distance: '15.2km'
      }
  
  ];

  interface Product {
    id: number;
    name: string;
    price: number;
    unit: string;
    farmer: string;
    image: string;
    distance: string;
  }

  interface ProductCardProps {
    product: Product;
  }

  const ProductCard = ({ product }: ProductCardProps) => {
    return (
      <View style={styles.productCard}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{"Ksh"}{product.price} {'/'}{product.unit}</Text>
          <Text style={styles.productFarmer}>{product.farmer}</Text>
          <Text style={styles.productDistance}>{product.distance}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productCard: {
    flex: 1, 
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 150, 
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  productFarmer: {
    fontSize: 12,
    color: 'gray',
  },
  productDistance: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
});