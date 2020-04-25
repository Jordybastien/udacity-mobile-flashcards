import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { gray, white, pink } from '../utils/colors';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtBox}
          placeholder={'Question'}
          onChangeText={(question) => this.setState({ question })}
          value={question}
        />
        <TextInput
          style={styles.txtBox}
          placeholder={'Answer'}
          onChangeText={(answer) => this.setState({ answer })}
          value={answer}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: white }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddCard;

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
    marginBottom: 20,
  },
});
