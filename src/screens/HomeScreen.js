import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 

const HomeScreen = ({ navigation }) => {
  const featuredDestinations = [
    {
      id: '1',
      name: 'Niladri Reservoir',
      location: 'Tekergat, Sunamgri',
      rating: 4.7,
      price: '$50',
    },
    {
      id: '2',
      name: 'Casa Las Tirtugas',
      location: 'Av Damero, Mexico',
      rating: 4.8,
      price: '$894',
    },
    {
      id: '3',
      name: 'Aonang Villa Resort',
      location: 'Basitola, Islampur',
      rating: 4.3,
      price: '$761',
    },
  ];

  const popularPackages = [
    {
      id: '1',
      name: 'Santorini Island',
      date: '16 July-28 July',
      rating: 4.8,
      people: '27 Person Joined',
    },
    {
      id: '2',
      name: 'Bukita Rayandro',
      date: '20 Sep-29 Sep',
      rating: 4.3,
      people: '15 Person Joined',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Leonardo</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile')}
          style={styles.profilePlaceholder}
        >
          <Text style={styles.profileInitial}>L</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <LinearGradient colors={['#FF6B6B', '#FF8E8E']} style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Explore the Beautiful world!</Text>
        <Text style={styles.heroSubtitle}>Life is short and the world is wide</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Places"
          placeholderTextColor="#999"
        />
      </View>
      
      {/* Featured Destinations */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Destination</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {featuredDestinations.map((destination) => (
          <TouchableOpacity 
            key={destination.id}
            style={styles.destinationCard}
            onPress={() => navigation.navigate('Destination', { destination })}
          >
            <View style={styles.destinationImagePlaceholder}>
              <Text style={styles.placeholderText}>Image</Text>
            </View>
            <Text style={styles.destinationName}>{destination.name}</Text>
            <Text style={styles.destinationLocation}>{destination.location}</Text>
            <View style={styles.destinationFooter}>
              <View style={styles.ratingContainer}>
                <Text style={styles.starIcon}>⭐</Text>
                <Text style={styles.destinationRating}>{destination.rating}</Text>
              </View>
              <Text style={styles.destinationPrice}>{destination.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Popular Packages */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Package</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {popularPackages.map((packageItem) => (
          <TouchableOpacity key={packageItem.id} style={styles.packageCard}>
            <View style={styles.packageContent}>
              <Text style={styles.packageName}>{packageItem.name}</Text>
              <Text style={styles.packageDate}>{packageItem.date}</Text>
              <View style={styles.packageFooter}>
                <View style={styles.ratingContainer}>
                  <Text style={styles.starIcon}>⭐</Text>
                  <Text style={styles.packageRating}>{packageItem.rating}</Text>
                </View>
                <Text style={styles.packagePeople}>{packageItem.people}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: 'white',
    fontWeight: 'bold',
  },
  heroContainer: {
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    color: '#FF6B6B',
    fontSize: 14,
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  destinationCard: {
    width: 200,
    marginRight: 15,
    marginBottom: 20,
  },
  destinationImagePlaceholder: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
  },
  destinationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  destinationLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  destinationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 5,
  },
  destinationRating: {
    color: '#333',
  },
  destinationPrice: {
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  packageCard: {
    width: 200,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
  },
  packageContent: {
    flex: 1,
  },
  packageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  packageDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  packageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packageRating: {
    color: '#333',
  },
  packagePeople: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen; 