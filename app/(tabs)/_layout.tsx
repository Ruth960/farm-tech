import { Tabs } from 'expo-router';
import React from 'react'; 
import { Platform, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      tabBarInactiveTintColor:'black',
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        // Use a transparent background on iOS to show the blur effect
        position: 'absolute',
        
        
        },
        default: {},
      }),
      
      tabBarLabelPosition: 'below-icon', // Ensures the label is below the icon
      
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: () => <IconSymbol size={20} name="house.fill" color='green' />,
      }}
      />
      <Tabs.Screen
      name="community"
      options={{
        title: 'Forum',
        tabBarIcon: () => 
          <MaterialCommunityIcons name="message-outline" size={28} color='green' />,
      }}
      />
       <Tabs.Screen
      name="cart"
      options={{
        title: 'Cart',
        tabBarIcon: () =><AntDesign name="shoppingcart" size={28} color='green' />,
      }}
      />
      
      <Tabs.Screen
      name="profile"
      
      options={{ 
        title: 'Profile',
        tabBarIcon: () => <MaterialCommunityIcons name="account-circle" size={28} color='green' />,

      }}
      />
     
    </Tabs>
  );
}

const styles = StyleSheet.create({
  text: {
    
  }
})
