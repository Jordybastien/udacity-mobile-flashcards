import React from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import SingleDeck from './singleDeck';
import { white } from '../utils/colors';
import { getDecks } from '../utils/api';

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
  {
    title: 'This is a question here',
    number: 6,
  },
  {
    title: 'This is another question here',
    number: 8,
  },
  {
    title: 'This is a very long one to test how it worksquestion here',
    number: 10,
  },
];

const wait = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const Decks = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // TODO: dispatch  getDecks
    getDecks();

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {decks.map((deck) => (
          <SingleDeck deck={deck} />
        ))}
      </ScrollView>
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
