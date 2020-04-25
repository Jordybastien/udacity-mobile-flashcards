import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import SingleDeck from './singleDeck';
import { white } from '../utils/colors';
import { getDecks } from '../utils/api';
import { handleFetchingDecks } from '../actions';

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

  if (deckIds.length === 0) {
    return (
      <View style={[styles.container, { padding: 20 }]}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text style={styles.noDeck}>
            There are no decks, Pull down to refresh
          </Text>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {deckIds.map((deck) => (
          <SingleDeck deck={deck} key={deck}/>
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
  noDeck: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
