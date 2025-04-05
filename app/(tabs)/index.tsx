import { ScrollView, FlatList, StyleSheet, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from '@/components/home/Navbar';
import SearchBar from '@/components/home/SearchBar';
import Hero from '@/components/home/Hero';
import AddItems from '@/components/home/AddItems';
import ProductList from '@/components/home/ProductList';

export default function HomeScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
        <SearchBar />
        <Hero />
      <ScrollView>
        
        <ProductList />
        
      </ScrollView>
      <AddItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: 'white',
    height: '100%',
  },
  heroSection: {
    marginBottom: 20,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    position: 'absolute',
    top: 490,
    right: 30,
  },
});