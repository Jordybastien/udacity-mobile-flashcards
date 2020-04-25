import React from 'react';
import { View, StyleSheet } from 'react-native';
import SingleDeck from './singleDeck';
import { white } from '../utils/colors';

const decks = [
  {
    title: 'This is a question here',
    number: 2,
  },
  {
    title: 'This is another question here',
    number: 3,
  },
  {
    title: 'This is a very long one to test how it worksquestion here',
    number: 4,
  },
];
const Decks = () => {
  return (
    <View style={styles.container}>
      {decks.map((deck) => (
        <SingleDeck deck={deck} />
      ))}
    </View>
  );
};

export default Decks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: 50,
  },
});
