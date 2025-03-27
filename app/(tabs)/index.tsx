import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Navbar  from '@/components/home/Navbar';
import  Hero from '@/components/home/Hero';
import  MarketListing  from '@/components/home/MarketListing';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView style={{
      margin: 12,
      backgroundColor:'white',
    }}>
      <Navbar/>
      <Hero/>
      <MarketListing/>
    </SafeAreaView>
       
      
  );
}

