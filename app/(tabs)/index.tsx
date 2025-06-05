import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/home/Navbar'
import Highlights from '@/components/home/Highlights';
import HeroSection from '@/components/home/HeroSection';
import MarketListing from '@/components/home/MarketListing';

// Define the type for section items
interface SectionItem {
  id: string;
  component: React.ComponentType;
}

export default function HomeScreen(): React.JSX.Element {
  // Define sections to render in the FlatList
  const sections: SectionItem[] = [
    { id: 'hero', component: HeroSection },
    { id: 'highlights', component: Highlights },
    { id: 'market', component: MarketListing },
  ];

  // Render each section with proper typing
  const renderSection = ({ item }: { item: SectionItem }) => {
    const Component = item.component;
    return <Component />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      
      <FlatList
        data={sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  
  container: {
    flex: 1,
  },
});