import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HeroSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Empowering Small-scale{'\n'}
                Farmers.{'\n'}
                Strengthening{'\n'}
                Communities.{'\n'}
                Transforming Lives.
            </Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.greenButton]}>
                    <Text style={styles.buttonTextWhite}>Join as a Farmer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.whiteButton]}>
                    <Text style={styles.buttonTextGreen}>Shop Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.greenButton]}>
                    <Text style={styles.buttonTextWhite}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.grayButton]}>
                    <Text style={styles.buttonTextGray}>Learn More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#929292', // gray background
        padding: 20,
    
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 48,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12, 
    },
    button: {
        minWidth: 140,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 6,
    },
    greenButton: {
        backgroundColor: '#00b386',
    },
    whiteButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#00b386',
    },
    grayButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#fff',
    },
    buttonTextWhite: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonTextGreen: {
        color: '#00b386',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonTextGray: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});