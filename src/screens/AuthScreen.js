import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../firebaseConfig';

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
    </View>
  );
}
