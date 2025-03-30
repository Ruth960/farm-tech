import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function ProfileHead() {
  const productCount = 24;
  const salesCount = 156;
  const postsCount = 14;

  return (
    <ScrollView>
        <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.image}
        />
        <Text style={styles.profileName}>Jane Job</Text>
        <Text style={styles.profileBio}>Maize and Potatoes farmer</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{productCount}</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{salesCount}</Text>
          <Text style={styles.statLabel}>Sales</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{postsCount}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.contactHeader}>Contact Information</Text>
        <Text style={styles.contactText}>janjob@gmail.com</Text>
        <Text style={styles.contactText}>2547 45 846180</Text>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.settingItem}>
          <AntDesign name="setting" size={24} color="grey" style={styles.icon} />
          Account Setting
        </Text>
        <Text style={styles.settingItem}>
          <Feather name="help-circle" size={24} color="grey" style={styles.icon} />
          Help and Support
        </Text>
        <Text style={styles.settingItem}>
          <AntDesign name="logout" size={24} color="grey" style={styles.icon} />
          Sign out
        </Text>
      </View>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    
  },
  profileHeader: {
    backgroundColor: 'green',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop:10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, // Add padding for better spacing
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: '50%',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    color: 'white',
  },
  profileBio: {
    fontSize: 16,
    padding: 5,
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f0f0f0',
    width: '90%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  statLabel: {
    fontSize: 16,
    color: 'rgb(73, 72, 75)',
  },
  contactContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderTopColor:'black',
    borderTopWidth: 1,
    width: '90%',
    alignItems: 'center',
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(73, 72, 75)',
    paddingBottom: 5,
  },
  contactText: {
    fontSize: 16,
    color: 'rgb(73, 72, 75)',
    padding:4,
    textAlign:'center',
  },
  settingsContainer: {
    padding: 15,
    margin: 20,
    backgroundColor: '#f0f0f0',
    width: '90%',
  },
  settingItem: {
    padding: 12,
    fontSize: 16,
    fontWeight: '600',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
})