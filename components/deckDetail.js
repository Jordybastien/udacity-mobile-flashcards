import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { gray, white, pink, red } from '../utils/colors';
import { handleDeleteDeck } from '../actions';

// const DeckDetail = (props) => {
class DeckDetail extends Component {
  removeDeck = (deckId) => {
    this.props.dispatch(handleDeleteDeck(deckId));
    this.props.navigation.goBack();
  };

  render() {
    const { deckId, deck } = this.props;

    if (deck === undefined) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>{deck && deck.title}</Text>
        <Text style={styles.cardsNumber}>
          {deck.questions && deck.questions.length} cards
        </Text>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity style={[styles.btn, styles.transparentBtn]}>
            <Text style={{ color: pink }}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.coloredBtn]}>
            <Text style={{ color: white }}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.removeDeck(deckId)}>
            <Text style={styles.answerLabel}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (decks, { route }) => {
  const { deckId } = route.params;
  return {
    deckId,
    deck: decks[deckId],
  };
};

export default connect(mapStateToProps)(DeckDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  deckTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardsNumber: {
    color: gray,
  },
  buttonsGroup: {
    marginTop: 100,
  },
  btn: {
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
  transparentBtn: {
    backgroundColor: white,
    borderColor: pink,
    borderWidth: 1,
  },
  coloredBtn: {
    backgroundColor: pink,
  },
  answerLabel: {
    color: red,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
  },
});
