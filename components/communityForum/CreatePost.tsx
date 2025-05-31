import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function CreatePost() {
  const [post, setPost] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>
          Share an update or ask a question:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Write your post here..."
          multiline
          value={post}
          onChangeText={setPost}
          placeholderTextColor="#9ca3af"
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 600,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    padding: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#1e293b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    width: '100%',
    minHeight: 96,
    maxHeight: 160,
    padding: 12,
    marginBottom: 6,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#1e293b',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#22c55e',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});