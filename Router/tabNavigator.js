import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { white, pink } from '../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import AddDeck from '../components/addDeck';
import Decks from '../components/decks';

const RouteConfigs = {
  Decks: {
    name: 'Decks',
    component: Decks,
    options: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      ),
      title: 'Decks',
    },
  },
  AddDeck: {
    component: AddDeck,
    name: 'Add Deck',
    options: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name='plus-square' size={30} color={tintColor} />
      ),
      title: 'Add Deck',
    },
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? pink : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : pink,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen {...RouteConfigs['Decks']} />
      <Tab.Screen {...RouteConfigs['AddDeck']} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
