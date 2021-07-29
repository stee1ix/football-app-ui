import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import colors from './assets/colors/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{cardStyle: {backgroundColor: colors.offwhite}}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{cardStyle: {backgroundColor: colors.offwhite}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
