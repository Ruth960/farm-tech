import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';

const farmProducts = [
  {
    image: 'https://www.allrecipes.com/thmb/7gKL1HRDfCZhfsXFszQFPI5kSYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6649893_Fresh-Garden-Tomato-Sauce-assorted-tomatoes-63b8d6e4af3446f59c0fdb5414be1595.jpg',
    name: 'Fresh Tomatoes',
    price: 100,
    description: 'Organic red tomatoes, handpicked and sun-ripened.',
    quantity: '10 kg',
    location: 'Kinoo',
    date_available: '2025-06-05',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5xVO4Wv-e1dcrCs2ZQIjBS-qzoFLrI2P1w&s',
    name: 'Carrots',
    price: 70,
    description: 'Crunchy orange carrots grown with natural compost.',
    quantity: '8 kg',
    location: 'Legen',
    date_available: '2025-06-06',
  },
  {
    image: 'https://www.southernliving.com/thmb/7Pg9J4Q0dyVevZtiq-3p2GnohQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Eggs_002_preview-8d532a48790b4a5190e513de08678e7f.jpg',
    name: 'Free-Range Eggs',
    price: 400,
    description: 'A dozen farm-fresh free-range chicken eggs.',
    quantity: '30 eggs per pack',
    location: 'Kikuyu',
    date_available: '2025-06-04',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd12KlRE9ed5wYMx_V6QycBtiDpcQVF9zn9Q&s',
    name: 'Spinach Leaves',
    price: 3.0,
    description: 'Freshly harvested spinach leaves rich in iron.',
    quantity: '5 bunches',
    location: 'Muthengera',
    date_available: '2025-06-07',
  },
  {
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2024/03/Honey440-bb52330.jpg?quality=90&resize=440,400',
    name: 'Raw Honey',
    price:  700,
    description: 'Pure raw honey straight from local beekeepers.',
    quantity: '500 ml jar',
    location: 'Kikuyu',
    date_available: '2025-06-05',
  },
];

const ProductItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>Ksh{item.price.toFixed(2)}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.details}>Quantity: {item.quantity}</Text>
    <Text style={styles.details}>Location: {item.location}</Text>
    <Text style={styles.details}>Available: {item.date_available}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={farmProducts}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  details: {
    fontSize: 13,
    color: '#555',
  },
});
