import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Leak1 from './Leak1';
import Leak2 from './Leak2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Leak1" component={Leak1} />
        <Stack.Screen name="Leak2" component={Leak2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
