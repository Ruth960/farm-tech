import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const highlights = [
  {
    id: '1',
    emoji: '🌽',
    label: 'Listed Produce',
    value: '15',
    bgColor: '#d4fbe3',
    valueColor: '#1e7d32',
  },
  {
    id: '2',
    emoji: '📈',
    label: 'Avg. Price Increase',
    value: '28%',
    bgColor: '#fff9c4',
    valueColor: '#b8860b',
  },
  {
    id: '3',
    emoji: '🤝',
    label: 'Buyers Connected',
    value: '7',
    bgColor: '#e3f0ff',
    valueColor: '#1a4fd7',
  },
];

const recentActivity = [
  { id: '1', text: 'New buyer for Maize.', time: '2 hours ago' },
  { id: '2', text: 'Market price update for Beans.', time: 'Yesterday' },
  { id: '3', text: 'New educational content: "Efficient Water Use".', time: '3 days ago' },
];

export default function Highlights() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        <Text style={styles.bold}>Welcome, Farmer! </Text>
        <Text style={styles.wave}>👋</Text>
      </Text>
      <Text style={styles.subtitle}>
        Your centralized hub for managing your produce, tracking market trends, and connecting with buyers.
      </Text>
      <View style={styles.cardsRow}>
        {highlights.map((item) => (
          <View key={item.id} style={[styles.card, { backgroundColor: item.bgColor }]}>
            <Text style={styles.cardEmoji}>{item.emoji}</Text>
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Text style={[styles.cardValue, { color: item.valueColor }]}>{item.value}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.activityHeader}>Recent Activity</Text>
      <FlatList
        data={recentActivity}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityRow}>
            <Text style={styles.activityText}>{item.text}</Text>
            <Text style={styles.activityTime}>{item.time}</Text>
          </View>
        )}
        style={styles.activityList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  welcome: { fontSize: 24, marginBottom: 4, color: '#009688' },
  bold: { 
    fontWeight: 'bold', 
    color:'green'

   },
  wave: { fontSize: 24 },
  subtitle: { fontSize: 14, color: '#444', marginBottom: 16 },
  cardsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  card: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardEmoji: { fontSize: 36, marginBottom: 4 },
  cardLabel: { fontWeight: '600', fontSize: 16, marginBottom: 4, textAlign: 'center' },
  cardValue: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  activityHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, marginTop: 8 },
  activityList: { marginTop: 0 },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafbfc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  activityText: { fontSize: 15, color: '#222', flex: 1 },
  activityTime: { fontSize: 13, color: '#888', marginLeft: 8 },
});

