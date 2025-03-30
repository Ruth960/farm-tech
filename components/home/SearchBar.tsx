import React from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

/**
 * A reusable search bar component.
 */
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBar}>
        <TextInput
          style={styles.input}
          
          placeholder="Search"
          placeholderTextColor="#ccc"
        />
        <AntDesign name="search1" size={24} color="black" />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  input: {
    height: 30,
    
    padding: 2,
    fontSize: 16,
    color: '#333',
    
  },
  searchBar: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    elevation: 4,
  }
});