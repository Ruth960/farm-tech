import { Image, ScrollView, StyleSheet, Platform, Text, TouchableOpacity, View } from 'react-native';

import Navbar  from '@/components/home/Navbar';
import  Hero from '@/components/home/Hero';
import  MarketListing  from '@/components/home/MarketListing';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tabs } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function HomeScreen() {
  return ( 
    <SafeAreaView style={styles.container}>
      
      <View>
        <ScrollView>
          <Navbar/>
          <Hero/>
          
          <MarketListing/>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity style={styles.iconStyle}>
          <Text >
            <FontAwesome6 name="add" size={32} color="white" />
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
       
      
  );
}

const styles  = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: 'white',
    height: '100%',
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

