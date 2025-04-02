import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Hero() {
    const buttons = ['All products', 'Cereals', 'Vegetables', 'Fruits', 'Eggs', 'chicken', 'Dairy', 'Beverages', 'Grains'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.scrollContainer}>
                <View style={styles.buttonRow}>
                    {buttons.map((button, index) => (
                        <TouchableOpacity key={index} style={styles.button}>
                            <Text style={styles.buttonText}>{button}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 1,
        margin: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollContainer: {
        marginTop: 10,
    },
    buttonRow: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems:'center',
        margin: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    }
        
});