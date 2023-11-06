import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HorizontalGraph from './src/Screens/Horizontal';
import DonoughtChart from './src/Screens/DonoughtChart';
import IndicatorCircle from './src/Screens/Indicatorcircle';
import VerticalGraph from './src/Screens/VerticalGraph';
import MainScreen from './src/Screens/MainScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="HorizontalGraph" component={HorizontalGraph} />
        <Stack.Screen name="DonoughtChart" component={DonoughtChart} />
        <Stack.Screen name="IndicatorCircle" component={IndicatorCircle} />
        <Stack.Screen name="VerticalGraph" component={VerticalGraph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
