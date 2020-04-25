import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { gray, white, pink } from '../utils/colors';

const DeckDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.deckTitle}>Deck Details</Text>
      <Text style={styles.cardsNumber}>5 cards</Text>
      <View style={styles.buttonsGroup}>
        <TouchableOpacity style={[styles.btn, styles.transparentBtn]}>
          <Text style={{ color: pink }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.coloredBtn]}>
          <Text style={{ color: white }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckDetail;

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
});
