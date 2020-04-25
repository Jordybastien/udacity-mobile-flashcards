import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { white, pink } from '../utils/colors';
import TabNav from './tabNavigator';

const StackNavigatorConfig = {
  headerMode: 'screen',
};
const StackConfig = {
  TabNav: {
    name: 'Home',
    component: TabNav,
    options: { headerShown: false },
  },
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['TabNav']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
