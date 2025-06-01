import React, { useState } from 'react';
import { ScrollView, View,  StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/home/Navbar'
import SearchBar from '@/components/home/SearchBar'
import HeroSection from '@/components/home/HeroSection';
export default function HomeScreen(): React.JSX.Element {
  

    return (
      <SafeAreaView>
        <Navbar />
        
        <ScrollView >
          <HeroSection />
          
        </ScrollView>
          
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  
});