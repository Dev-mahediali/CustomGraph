import React from 'react';
import {View, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';

const DonoughtChart = () => {
  const widthAndHeight = 240;
  const sliceColor = ['#2C7E38', '#36BF4B', '#FFBCE6', '#D93025', '#949FA5'];
  const series = [87, 3, 6, 2, 2];

  return (
    <View style={styles.container}>
      <View style={{transform: [{rotate: '165deg'}]}}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.6}
          coverFill={'#FFF'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },
});

export default DonoughtChart;
