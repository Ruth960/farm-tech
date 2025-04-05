import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/home/Navbar'
import SearchBar from '@/components/home/SearchBar'
import Categories from '@/components/home/Categories'
import ProductList from '@/components/home/ProductList'

export default function HomeScreen(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All products');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.main}>
      <Navbar />
       <SearchBar onSearch={handleSearch} />
        <Categories
          onSelectCategory={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      <ScrollView contentContainerStyle={styles.contentContainer}>
       
        <ProductList searchQuery={searchQuery} selectedCategory={selectedCategory} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  contentContainer: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});