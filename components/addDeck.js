import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { gray, white, pink } from '../utils/colors';
import { handleAddingDeckTitle } from '../actions';

class AddDeck extends Component {
  state = {
    deckTitle: '',
  };

  handleSubmit = () => {
    const { deckTitle } = this.state;
    this.setState({ deckTitle: '' });
    this.props.dispatch(handleAddingDeckTitle(deckTitle));
    this.props.navigation.navigate('DeckDetail', {
      deckId: deckTitle,
      title: deckTitle,
    });
  };

  render() {
    const { deckTitle } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.deckLabel}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.txtBox}
          placeholder={'Deck Title'}
          onChangeText={(deckTitle) => this.setState({ deckTitle })}
          value={deckTitle}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.btn}
          disabled={deckTitle === ''}
        >
          <Text style={{ color: white }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  deckLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textAlign: 'center',
    width: 350,
  },
  btn: {
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
    backgroundColor: pink,
  },
  txtBox: {
    borderColor: gray,
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    paddingLeft: 10,
  },
});
