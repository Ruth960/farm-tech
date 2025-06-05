import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import ProductShow from '@/components/products/ProductShow';
import ProductListing from '@/components/products/ProductListing';
import MarketListing from '@/components/home/MarketListing';
export default function Products() {
    const [showProductForm, setShowProductForm] = useState(false);

    const toggleProductForm = () => {
        setShowProductForm(!showProductForm);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Navbar />
            <ProductShow />
            <TouchableOpacity 
                style={styles.addButton}
                onPress={toggleProductForm}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            {/* Product Form Modal */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={showProductForm}
                onRequestClose={toggleProductForm}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Add New Product</Text>
                        <TouchableOpacity onPress={toggleProductForm}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <ProductListing />
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 999,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        color: 'green',
        fontSize: 16,
    }
});