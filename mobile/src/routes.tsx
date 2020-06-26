import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Drawer from './pages/Drawer';
import Category from './pages/Category';
import Product from './pages/Product';

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={Main} />
      <AppStack.Screen name="Drawer" component={Drawer} />
      <AppStack.Screen name="Category" component={Category} />
      <AppStack.Screen name="Product" component={Product} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
