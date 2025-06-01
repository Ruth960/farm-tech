import { View, ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Resources() {
    return (
        <ScrollView style={styles.wrapper}>
           
            <Text style={styles.sectionTitle}>Featured Resources</Text>
            <View style={styles.cardRow}>
                <View style={styles.card}>
                    <Text style={styles.icon}>📖</Text>
                    <Text style={styles.cardTitle}>Organic Farming Basics</Text>
                    <Text style={styles.cardSubtitle}>Course</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.icon}>🏆</Text>
                    <Text style={styles.cardTitle}>Sustainable Practices</Text>
                    <Text style={styles.cardSubtitle}>Guide</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.icon}>🏪</Text>
                    <Text style={styles.cardTitle}>Market Strategy</Text>
                    <Text style={styles.cardSubtitle}>Workshop</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.icon}>👥</Text>
                    <Text style={styles.cardTitle}>Community Forum</Text>
                    <Text style={styles.cardSubtitle}>Discussion</Text>
                </View>
            </View>

            {/* Learning Hub */}
            <Text style={styles.sectionTitle}>Learning Hub</Text>
            <View style={styles.cardRow}>
                <View style={styles.cardAlt}>
                    <Text style={styles.icon}>▶️</Text>
                    <Text style={styles.cardTitle}>Video Tutorials</Text>
                    <Text style={styles.cardDesc}>Access hundreds of farming technique videos</Text>
                </View>
                <View style={styles.cardAlt}>
                    <Text style={styles.icon}>📝</Text>
                    <Text style={styles.cardTitle}>Farming Guides</Text>
                    <Text style={styles.cardDesc}>Comprehensive guides for sustainable farming</Text>
                </View>
                <View style={styles.cardAlt}>
                    <Text style={styles.icon}>💬</Text>
                    <Text style={styles.cardTitle}>Expert Support</Text>
                    <Text style={styles.cardDesc}>Direct access to agricultural experts</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingVertical: 24,
        paddingHorizontal: 8,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222d35',
        textAlign: 'center',
        marginVertical: 18,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 22,
        margin: 8,
        minWidth: 180,
        maxWidth: 220,
        alignItems: 'flex-start',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    cardAlt: {
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 22,
        margin: 8,
        minWidth: 220,
        maxWidth: 320,
        alignItems: 'flex-start',
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 2,
    },
    icon: {
        fontSize: 32,
        color: '#00b386',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 15,
        color: '#00b386',
        fontWeight: '500',
    },
    cardDesc: {
        fontSize: 15,
        color: '#444',
        marginTop: 2,
    },
});