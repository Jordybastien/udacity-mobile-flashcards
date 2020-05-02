import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { pink } from '../utils/colors';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import MainNav from './stackNavigator';

/**
 * @description functional component to return a component with all routes
 */
const Router = () => {
  return (
    <NavigationContainer>
      <AppStatusBar backgroundColor={pink} barStyle='light-content' />
      <MainNav />
    </NavigationContainer>
  );
};

/**
 * @param object receives object containing the backgroundColor and other props
 * @description functional component to return Status Bar
 */
const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default Router;
