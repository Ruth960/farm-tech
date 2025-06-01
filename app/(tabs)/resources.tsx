import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';


export default function Resources() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
              <Text  style={styles.title}>Resources</Text>
            <Text style={styles.text}>This page is under construction.</Text>
            <Text >Please check back later for updates.</Text>
        </View>
    
    </SafeAreaView>
  );
}            


const styles = StyleSheet.create({
     container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
});
