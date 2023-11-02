/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {itemType} from 'react-native-gifted-charts/src/BarChart/types';
import {Path, Pattern} from 'react-native-svg';

const MyPattern = () => {
  return (
    <Pattern
      id="DiagonalLines"
      patternUnits="userSpaceOnUse"
      x="0"
      y="2"
      width={60}
      height={14}
      viewBox="0 0 40 20">
      <Path
        d="M -130 25 L 110 0"
        stroke={'white'}
        strokeWidth={5}
        transform={{rotation: 35}}
      />
    </Pattern>
  );
};

const App = () => {
  const {width} = useWindowDimensions();

  const Data: itemType[] = [
    {
      value: 2000,
      label: 'Skogsmark - Produktiv',
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
          20,0
        </Text>
      ),
    },
    {
      value: 1000,
      label: 'Skogsmark - Improduktiv',
      frontColor: '#2C7E38',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            bottom: 2,
            marginLeft: 85,
          }}>
          10,2
        </Text>
      ),
    },
    {
      value: 2000,
      label: 'Öppen våtmark / Myr',
      frontColor: '#7E84FA',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            bottom: 2,
            marginLeft: 85,
          }}>
          20,0
        </Text>
      ),
    },
    {
      value: 2000,
      label: 'Inäga / Åker',
      frontColor: '#DE3D82',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            bottom: 2,
            marginLeft: 85,
          }}>
          20,0
        </Text>
      ),
    },
    {
      value: 2000,
      label: 'Vatten',
      frontColor: '#0FB5AE',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            bottom: 2,
            width: 100,
            marginLeft: 85,
          }}>
          20,0
        </Text>
      ),
    },
    {
      value: 2000,
      label: 'Fjäll',
      frontColor: '#393D40',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            bottom: 2,
            fontSize: 18,
            width: 100,
            marginLeft: 85,
          }}>
          20,0
        </Text>
      ),
    },
    {
      value: 2000,
      label: 'Fjällbjörkskog',
      frontColor: '#949FA5',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            bottom: 2,
            fontSize: 18,
            width: 100,
            marginLeft: 85,
          }}>
          20,0
        </Text>
      ),
    },
    {
      value: 2000,
      label: 'Fjällbarrskog',
      frontColor: '#949FA5',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            bottom: 2,
            fontSize: 18,
            width: 100,
            marginLeft: 85,
          }}>
          20,0
        </Text>
      ),
    },
    {
      value: 400,
      label: 'Berg / Övrig öppen mark',
      frontColor: '#E8C600',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            bottom: 2,
            marginLeft: 85,
          }}>
          4,1
        </Text>
      ),
    },
    {
      value: 400,
      label: 'Kraftledning',
      frontColor: '#147AF3',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            bottom: 2,
            marginLeft: 85,
          }}>
          4,0
        </Text>
      ),
    },
    {
      value: 400,
      label: 'Exploaterad mark',
      frontColor: '#F68511',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          4,0
        </Text>
      ),
    },
    {
      value: 200,
      label: 'Väg',
      frontColor: '#F4B172',
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          2,1
        </Text>
      ),
    },
    {
      value: 100,
      label: 'Övrigt',
      frontColor: '#4046CA',
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
      value: 1800,
      label: 'Oklassificerat',
      frontColor: '#949FA5',
      barBackgroundPattern: MyPattern,
      patternId: 'DiagonalLines',
      spacing: 9,
      topLabelComponent: () => (
        <Text
          style={{
            color: '#3F484A',
            fontSize: 18,
            width: 100,
            marginLeft: 85,
            bottom: 2,
          }}>
          16,0
        </Text>
      ),
    },
  ];

  return (
    <View style={{flex: 1, height: 10}}>
      <BarChart
        horizontal
        barWidth={22}
        width={120}
        labelWidth={280}
        xAxisLabelTextStyle={{marginTop: -140, marginRight: 115}}
        labelsExtraHeight={width / 2}
        barBorderTopRightRadius={6}
        barBorderTopLeftRadius={6}
        data={Data}
        yAxisThickness={0}
        xAxisThickness={1}
        hideRules
        hideYAxisText
        noOfSections={1}
      />
    </View>
  );
};
export default App;
// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import {BarChart} from 'react-native-gifted-charts';
// import {Path, Pattern} from 'react-native-svg';
// // create a component
// const MyPattern = () => {
//   return (
//     <Pattern
//       id="DiagonalLines"
//       patternUnits="userSpaceOnUse"
//       x="0"
//       y="0"
//       width={52}
//       height={19}
//       viewBox="0 0 40 20">
//       <Path
//         d=" M -670 40 L 380 0"
//         stroke={'white'}
//         strokeWidth={3}
//         transform={{rotation: -30}}
//       />
//     </Pattern>
//   );
// };
// const App = () => {
//   const barData = [
//     {
//       value: 35,
//       frontColor: '#2C7E38',
//       topLabelComponent: () => (
//         <Text
//           style={{
//             color: '#3F484A',
//             fontSize: 18,
//             width: 100,
//             marginLeft: 85,
//             bottom: 2,
//           }}>
//           57
//         </Text>
//       ),
//     },
//     {value: 5, frontColor: '#36BF4B'},
//     {value: 8, frontColor: '#FFBCE6'},
//     {value: 5, frontColor: '#D93025'},
//     {
//       value: 25,
//       frontColor: '#949FA5',
//       barBackgroundPattern: MyPattern,
//       patternId: 'DiagonalLines',
//       spacing: 9,
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <BarChart
//         frontColor={'#177AD5'}
//         barWidth={35}
//         data={barData}
//         hideRules
//         hideYAxisText
//         yAxisThickness={0}
//         barBorderTopLeftRadius={5}
//         barBorderTopRightRadius={5}
//       />
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 80,
//     backgroundColor: '#ffff',
//   },
// });

// //make this component available to the app
// export default App;
//import liraries

// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import HalfCircle from './src/Graph/HalfCircle';

// const App: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <HalfCircle
//         percentage={0.05}
//         text="6%"
//         circleColor="#2C7E38"
//         LowerLabel="12ha"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
