import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { gray } from '../utils/colors';

const SingleDeck = ({ deck }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('DeckDetail')}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardsNumber}>{deck.number} cards</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (decks) => {};

export default connect()(SingleDeck);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: gray,
    borderBottomWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  cardsNumber: {
    fontSize: 15,
    alignItems: 'center',
    color: gray,
  },
});
