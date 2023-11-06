import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const navigateToHorizontalGraph = () => {
    navigation.navigate('HorizontalGraph');
  };

  const navigateToDonoughtChart = () => {
    navigation.navigate('DonoughtChart');
  };

  const navigateToIndicatorCircle = () => {
    navigation.navigate('IndicatorCircle');
  };

  const navigateToVerticalGraph = () => {
    navigation.navigate('VerticalGraph');
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToHorizontalGraph}>
        <Text style={styles.buttonText}>Horizontal Graph</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToDonoughtChart}>
        <Text style={styles.buttonText}>Donut Chart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={navigateToIndicatorCircle}>
        <Text style={styles.buttonText}>Indicator Circle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToVerticalGraph}>
        <Text style={styles.buttonText}>Vertical Graph</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MainScreen;
