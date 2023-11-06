import React from 'react';
import {View, StyleSheet} from 'react-native';
import HalfCircle from '../Graph/HalfCircle';

const IndicatorCircle: React.FC = () => {
  return (
    <View style={styles.container}>
      <HalfCircle circleColor="#2C7E38" percentage={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IndicatorCircle;
