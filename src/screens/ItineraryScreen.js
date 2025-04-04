import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ItineraryScreen = () => {
  const scheduleItems = [
    {
      id: '1',
      date: '26 January 2022',
      title: 'Niladri Reservoir',
      location: 'Tekergat, Sunamgiri',
      completed: true,
    },
    {
      id: '2',
      date: '26 January 2022',
      title: 'High Rech Park',
      location: 'Zoero Point, Syhet',
      completed: false,
    },
    {
      id: '3',
      date: '26 January 2022',
      title: 'Darma Reservoir',
      location: 'Darma, Kuningan',
      completed: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Calendar Header */}
      <View style={styles.calendarHeader}>
        <Text style={styles.monthText}>22 October</Text>
        <View style={styles.weekDays}>
          <Text style={styles.weekDay}>S</Text>
          <Text style={styles.weekDay}>M</Text>
          <Text style={styles.weekDay}>T</Text>
          <Text style={styles.weekDay}>W</Text>
          <Text style={styles.weekDay}>T</Text>
          <Text style={styles.weekDay}>F</Text>
          <Text style={styles.weekDay}>S</Text>
        </View>
        <View style={styles.daysRow}>
          <Text style={styles.day}>18</Text>
          <Text style={styles.day}>19</Text>
          <Text style={styles.day}>20</Text>
          <Text style={styles.day}>21</Text>
          <Text style={[styles.day, styles.currentDay]}>22</Text>
          <Text style={styles.day}>23</Text>
          <Text style={styles.day}>24</Text>
        </View>
      </View>

      {/* My Schedule Section */}
      <Text style={styles.sectionTitle}>My Schedule</Text>
      
      {scheduleItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.scheduleItem}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
          <View style={[
            styles.statusIndicator,
            item.completed ? styles.completed : styles.pending
          ]}>
            {item.completed ? (
              <Text style={styles.statusText}>✓</Text>
            ) : null}
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View all</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  calendarHeader: {
    marginBottom: 25,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDay: {
    width: 40,
    textAlign: 'center',
    color: '#666',
    fontWeight: 'bold',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    width: 40,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#333',
    borderRadius: 20,
  },
  currentDay: {
    backgroundColor: '#FF6B6B',
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dateContainer: {
    width: 80,
  },
  dateText: {
    color: '#666',
    fontSize: 14,
  },
  detailsContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  statusIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  pending: {
    borderColor: '#FFC107',
  },
  statusText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  viewAllButton: {
    alignSelf: 'center',
    marginTop: 20,
  },
  viewAllText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
});

export default ItineraryScreen; 