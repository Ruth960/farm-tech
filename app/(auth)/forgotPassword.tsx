import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Replace with your actual password reset logic or API call
    console.log(`Reset link sent to: ${email}`);
    Alert.alert('Reset Link Sent', `A password reset link has been sent to ${email}`);
    // You would normally make a call to your backend API here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your password?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
      return to 
      <Text style={{
                              color:'rgb(12, 12, 138)',
                               fontStyle:'italic',
                                fontWeight:'bold',
                              }}
                              onPress={() => router.push('/(auth)/forgotPassword')}
                                >sign in</Text>
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});