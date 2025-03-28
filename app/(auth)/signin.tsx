import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { Link } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const ForwardedButton = React.forwardRef((props: any, ref) => (
  <Button {...props} />
));

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { signIn, isLoading } = useAuth();
  console.log(email)
  const validateForm = () => {
    setErrorMessage('');
    
    if (!email || !password) {
      setErrorMessage('Email and password are required');
      return false;
    }
    
    return true;
  };

  const handleSignIn = async () => {
    if (!validateForm()) return;
    
    console.log('Attempting to sign in with:', email);
    const { error } = await signIn(email, password);
    
    if (error) {
      setErrorMessage(error.message || 'Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text h3 style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Welcome back! Please sign in to continue.</Text>
        
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        
        <View style={[styles.formField, styles.mt20, {padding: 10},]}>
          <Input
            label="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={setEmail}
            value={email}
            placeholder="email@address.com"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCorrect={false}
            disabled={isLoading}
            errorStyle={{ height: 0 }}
          />
        </View>
        
        <View style={styles.formField}>
          <Input
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            textContentType="password"
            disabled={isLoading}
            errorStyle={{ height: 0 }}
          /><FontAwesome  name='eye' />
        </View>
        
        <View style={[styles.formField, styles.mt20]}>
          <Button
            title={isLoading ? "" : "Sign In"}
            disabled={isLoading}
            onPress={handleSignIn}
            buttonStyle={styles.signInButton}
            icon={isLoading ? <ActivityIndicator color="white" size="small" /> : undefined}
          />
        </View>
        
        <View style={styles.linksContainer}>
          <Link href="/(auth)/signup" >
            <ForwardedButton
              title="Don't have an account? Sign Up"
              type="clear"
              titleStyle={styles.linkText}
              disabled={isLoading}
            />
          </Link>
          
          <Link href="/(auth)/forgot-password" >
            <ForwardedButton
              title="Forgot Password?"
              type="clear"
              titleStyle={styles.linkText}
              disabled={isLoading}
            />
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  errorText: {
    color: '#ff3b30',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  formField: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  signInButton: {
    backgroundColor: '#0891b2',
    borderRadius: 8,
    height: 50,
  },
  linksContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#0891b2',
  },
});