import { Tabs } from 'expo-router';
import React from 'react'; 
import { Platform } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

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
        tabBarIcon: ({ color }) => <IconSymbol size={20} name="house.fill" color={color} />,
      }}
      />
      <Tabs.Screen
      name="community"
      options={{
        title: 'Community',
        tabBarIcon: ({ color }) => <Ionicons name="people-circle-outline" size={20} color={color} />,
      }}
      />
      <Tabs.Screen
      name="shop"
      options={{
        title: 'Shop',
        tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-basket" size={20} color={color} />,
      }}
      />

      <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => <IconSymbol size={20} name="paperplane.fill" color={color} />,
      }}
      />
    </Tabs>
  );
}
