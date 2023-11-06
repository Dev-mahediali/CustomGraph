import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {Path, Pattern} from 'react-native-svg';
// create a component
const MyPattern = () => {
  return (
    <Pattern
      id="DiagonalLines"
      patternUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={52}
      height={19}
      viewBox="0 0 40 20">
      <Path
        d=" M -670 40 L 380 0"
        stroke={'white'}
        strokeWidth={3}
        transform={{rotation: -30}}
      />
    </Pattern>
  );
};
const VerticalGraph = () => {
  const barData = [
    {
      value: 35,
      frontColor: '#2C7E38',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          57
        </Text>
      ),
    },
    {
      value: 5,
      frontColor: '#36BF4B',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          2
        </Text>
      ),
    },
    {
      value: 8,
      frontColor: '#FFBCE6',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          4
        </Text>
      ),
    },
    {
      value: 5,
      frontColor: '#D93025',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          {'<1'}
        </Text>
      ),
    },
    {
      value: 25,
      frontColor: '#949FA5',
      barBackgroundPattern: MyPattern,
      patternId: 'DiagonalLines',
      spacing: 9,
    },
  ];
  return (
    <View style={styles.container}>
      <BarChart
        frontColor={'#177AD5'}
        barWidth={35}
        data={barData}
        hideRules
        hideYAxisText
        yAxisThickness={0}
        barBorderTopLeftRadius={5}
        barBorderTopRightRadius={5}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#ffff',
  },
});

//make this component available to the app
export default VerticalGraph;
