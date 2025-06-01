import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Navbar from "@/components/home/Navbar";

export default function Products() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Navbar />
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add Product</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'green',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});