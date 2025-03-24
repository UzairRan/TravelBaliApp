import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function DestinationScreen({ route, navigation }) {
  const { destination } = route.params;

  return (
    <View>
      <Image source={{ uri: destination.image }} style={{ width: 200, height: 150 }} />
      <Text>{destination.name}</Text>
      <Text>{destination.description}</Text>
      <Button title="Book Now" onPress={() => navigation.navigate('Booking')} />
    </View>
  );
}
 