import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { white, pink } from '../utils/colors';
import TabNav from './tabNavigator';
import DeckDetail from '../components/deckDetail';
import AddCard from '../components/addCard';

const StackNavigatorConfig = {
  headerMode: 'screen',
};
const StackConfig = {
  TabNav: {
    name: 'Home',
    component: TabNav,
    options: { headerShown: false },
  },
  DeckDetail: {
    name: 'DeckDetail',
    component: DeckDetail,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: pink,
      },
    },
  },
  AddCard: {
    name: 'AddCard',
    component: AddCard,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: pink,
      },
      title: 'Add Card',
    },
  },
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['TabNav']} />
      <Stack.Screen
        {...StackConfig['DeckDetail']}
        options={({ route }) => ({
          ...StackConfig['DeckDetail'].options,
          title: route.params.title,
        })}
      />
      <Stack.Screen {...StackConfig['AddCard']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
