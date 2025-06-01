import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';  

export default function Highlights(){
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Market Highlights</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
}); 
