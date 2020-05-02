import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { white, pink } from '../utils/colors';
import TabNav from './tabNavigator';
import DeckDetail from '../components/deckDetail';
import AddCard from '../components/addCard';
import Quiz from '../components/quiz';

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
  Quiz: {
    name: 'Quiz',
    component: Quiz,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: pink,
      },
    },
  },
};
const Stack = createStackNavigator();

/**
 * @description functional component to return all stack screens 
 */
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
      <Stack.Screen
        {...StackConfig['Quiz']}
        options={({ route }) => ({
          ...StackConfig['Quiz'].options,
          title: route.params.deckId,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
