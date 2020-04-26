import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { gray, white, pink, red } from '../utils/colors';
import { handleDeleteDeck } from '../actions';

// const DeckDetail = (props) => {
class DeckDetail extends Component {
  state = {
    animationValue: new Animated.Value(1),
  };

  removeDeck = (deckId) => {
    this.props.dispatch(handleDeleteDeck(deckId));
    this.props.navigation.goBack();
  };

  componentDidMount() {
    const { animationValue } = this.state;
    Animated.sequence([
      Animated.timing(animationValue, { duration: 200, toValue: 1.5 }),
      Animated.spring(animationValue, { toValue: 1, friction: 4 }),
    ]).start();
  }

  render() {
    const { deckId, deck, navigation } = this.props;
    const { animationValue } = this.state;

    if (deck === undefined) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Animated.Text
          style={[styles.deckTitle, { transform: [{ scale: animationValue }] }]}
        >
          {deck && deck.title}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.cardsNumber,
            { transform: [{ scale: animationValue }] },
          ]}
        >
          {deck.questions && deck.questions.length} cards
        </Animated.Text>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity
            style={[styles.btn, styles.transparentBtn]}
            onPress={() => {
              navigation.navigate('AddCard', {
                deckId,
              });
            }}
          >
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
