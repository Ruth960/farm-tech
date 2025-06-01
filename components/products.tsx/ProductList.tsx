import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  farmer: string;
  image: string;
  distance: string;
  category: string;
}

interface ProductListProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function ProductList({ searchQuery, selectedCategory }: ProductListProps) {
  const products: Product[] = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      price: 70,
      unit: 'kg',
      farmer: "John's Farm",
      image:
        'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '2.5 km',
      category: 'Vegetables',
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
      category: 'Vegetables',
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
      category: 'Vegetables',
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
      category: 'Eggs',
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
      category: 'Vegetables',
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
      category: 'Fruits',
    },
    {
      id: 7,
      name: 'Fresh Apples',
      price: 90,
      unit: 'kg',
      farmer: 'Orchard Valley',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      distance: '8.2 km',
      category: 'Fruits',
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
      category: 'Vegetables',
    },
    {
      id: 9,
      name: 'Oranges',
      price: 75,
      unit: 'kg',
      farmer: 'Citrus Grove',
      image:
        'https://images.unsplash.com/photo-1547514301-42534f3c6a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      distance: '10.5 km',
      category: 'Fruits',
    },
    {
      id: 10,
      name: 'Farm Fresh Milk',
      price: 150,
      unit: 'litre',
      farmer: 'Dairy Delight',
      image:
        'https://images.unsplash.com/photo-1604537353950-9186d96d9976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      distance: '11.8 km',
      category: 'Dairy',
    },
    {
      id: 11,
      name: 'Whole Wheat Bread',
      price: 65,
      unit: 'loaf',
      farmer: 'Bakery Fresh',
      image:
        'https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      distance: '3.2 km',
      category: 'Grains',
    },
    {
      id: 12,
      name: 'Brown Rice',
      price: 120,
      unit: 'kg',
      farmer: 'Rice Fields',
      image:
        'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      distance: '7.8 km',
      category: 'Cereals',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All products' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>
          Ksh {item.price} /{item.unit}
        </Text>
        <Text style={styles.farmer}>{item.farmer}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.grid}
        />
      ) : (
        <Text style={styles.noProducts}>No products found. Try a different search or category.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  grid: {
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  noProducts: {
    textAlign: 'center',
    padding: 32,
    color: '#6b7280',
    fontSize: 18,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 16,
    flex: 1,
    marginHorizontal: 8,
  },
  imageContainer: {
    height: 192,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  farmer: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 4,
  },
  distance: {
    color: '#6b7280',
    fontSize: 12,
    textAlign: 'right',
  },
  category: {
    backgroundColor: '#e9f5e9',
    color: '#16a34a',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    fontSize: 12,
    marginTop: 8,
    alignSelf: 'flex-start'
  },
});