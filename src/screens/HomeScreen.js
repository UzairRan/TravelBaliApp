import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Travel Bali</Text>
      <Button title="View Destinations" onPress={() => navigation.navigate('Destination')} />
    </View>
  );
}
 