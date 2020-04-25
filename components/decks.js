import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import SingleDeck from './singleDeck';
import { white } from '../utils/colors';
import { getDecks } from '../utils/api';
import { handleFetchingDecks } from '../actions';

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

const Decks = (props) => {
  useEffect(() => {
    props.dispatch(handleFetchingDecks());
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    props.dispatch(handleFetchingDecks());

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const { deckIds } = props;
  
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {deckIds.map((deck) => (
          <SingleDeck deck={deck} />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (decks) => {
  return {
    deckIds: Object.keys(decks),
  };
};

export default connect(mapStateToProps)(Decks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: 50,
  },
});
