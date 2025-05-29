import React, { createContext, useState, useEffect, useContext } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for token on app start
    (async () => {
      const storedToken = await SecureStore.getItemAsync('authToken');
      if (storedToken) {
        setToken(storedToken);
        // Optionally fetch user info here
        setUser({}); // Replace with actual user fetch
      }
      setLoading(false);
    })();
  }, []);

  const signIn = async (token, userData) => {
    await SecureStore.setItemAsync('authToken', token);
    setToken(token);
    setUser(userData);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync('authToken');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}