import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://192.168.100.17:8000/api/login/', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Login successful');
        router.push('/profile'); // Or your main screen
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: 'rgb(238, 241, 245)',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 10,
          width: 350,
          borderRadius: 20,
          padding: 20,
          elevation: 20,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'blue', padding: 10 }}>
          Sign In
        </Text>

        <TextInput
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        <Text>
          Forgot your password?
          <Text
            style={{ color: 'rgb(12, 12, 138)', fontStyle: 'italic', fontWeight: 'bold' }}
            onPress={() => router.push('/(auth)/forgotPassword')}
          >
            {' '}
            reset password
          </Text>
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(12, 12, 138)',
            borderRadius: 25,
            padding: 10,
            width: 150,
            margin: 10,
          }}
          onPress={handleSignIn}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size='small' color='white' />
          ) : (
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
              sign in
            </Text>
          )}
        </TouchableOpacity>

        <Text>
          Don’t have an account?
          <Text
            style={{
              color: 'rgb(12, 12, 138)',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onPress={() => router.push('/(auth)/register')}
          >
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 10,
    width: 300,
  },
});
