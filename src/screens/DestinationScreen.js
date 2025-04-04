import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DestinationScreen = ({ route, navigation }) => {
  const destination = route.params?.destination || {
    name: 'Default Destination',
    location: 'Unknown Location',
    rating: 4.5,
    price: 99,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainImagePlaceholder}>
        <Text style={styles.placeholderText}>Destination Image</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{destination.name}</Text>
        <Text style={styles.location}>{destination.location}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.starIcon}>⭐</Text>
          <Text style={styles.rating}>{destination.rating} (2498)</Text>
          <Text style={styles.price}>${destination.price}/Person</Text>
        </View>
        
        <Text style={styles.sectionTitle}>About Destination</Text>
        <Text style={styles.description}>
          You will get a complete travel package on the beaches. Packages in the form of airline tickets, 
          recommended Hotel rooms, Transportation. Have you ever been on holiday to the Greek ETC...
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>View on Map</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.placeholderText}>Map Preview</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Nearby Places</Text>
        <View style={styles.nearbyPlace}>
          <View style={styles.nearbyImagePlaceholder} />
          <View style={styles.nearbyInfo}>
            <Text style={styles.nearbyName}>La-Hotel</Text>
            <Text style={styles.nearbyDistance}>2.09 ml</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImagePlaceholder: {
    width: '100%',
    height: 250,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  starIcon: {
    marginRight: 5,
  },
  rating: {
    fontSize: 16,
    color: '#333',
    marginRight: 15,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 5,
  },
  readMore: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapPlaceholder: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nearbyPlace: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  nearbyImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#a0a0a0',
  },
  nearbyInfo: {
    flex: 1,
  },
  nearbyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  nearbyDistance: {
    fontSize: 14,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DestinationScreen; 