import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export default function Categories({ onSelectCategory, selectedCategory }: CategoriesProps) {
  const categories = ['All products', 'Cereals', 'Vegetables', 'Fruits', 'Eggs', 'Dairy', 'Beverages', 'Grains'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedCategory === category && styles.selectedButton,
              ]}
              onPress={() => onSelectCategory(category)}
            >
              <Text style={styles.buttonText}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  scrollContainer: {
    paddingBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    backgroundColor: '#16a34a',  
    color: 'white',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedButton: {
    backgroundColor: '#15803d',
    color: '#22c55e',
    flex:1,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});