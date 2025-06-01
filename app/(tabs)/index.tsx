import React, { useState } from 'react';
import { ScrollView, View,  StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/home/Navbar'
import SearchBar from '@/components/home/SearchBar'
import Categories from '@/components/home/Categories'
import ProductList from '@/components/home/ProductList'
import Cart  from '@/components/cart'

export default function HomeScreen(): React.JSX.Element {
  

    return (
      <SafeAreaView>
        <Navbar />
        <View >
          <SearchBar onSearch={(query: string) => { /* what are you seaching */ }} />
      </View>
    
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