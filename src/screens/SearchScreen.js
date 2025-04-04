import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  
  const popularPlaces = [
    {
      id: '1',
      name: 'Niladri Reservoir',
      location: 'Tokergut, Sunampij',
      price: '$894/Person',
    },
    {
      id: '2',
      name: 'Casa Las Tirtugas',
      location: 'Av Damero, Mexico',
      price: '$894/Person',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Places"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      
      <ScrollView style={styles.resultsContainer}>
        {popularPlaces.map((place) => (
          <TouchableOpacity key={place.id} style={styles.placeCard}>
            <View style={styles.placeInfo}>
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.placeLocation}>{place.location}</Text>
            </View>
            <Text style={styles.placePrice}>{place.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 18,
    color: '#666',
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  resultsContainer: {
    flex: 1,
  },
  placeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  placeInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  placeLocation: {
    fontSize: 14,
    color: '#666',
  },
  placePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
});

export default SearchScreen; 