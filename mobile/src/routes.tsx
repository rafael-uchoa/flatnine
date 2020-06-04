import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={Main} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
