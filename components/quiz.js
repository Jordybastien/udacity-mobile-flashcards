import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { red, white, green, pink } from '../utils/colors';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/notificationsHelper';

class Quiz extends Component {
  state = {
    showAnswer: false,
    currentQuestionIndex: 0,
    correctAnswers: 0,
  };

  /**
   * @param response receives response which is boolean
   * @description function to handle user response on a quiz
   */
  handleResponse = (response) => {
    const {
      currentQuestionIndex: newIndex,
      correctAnswers: newCorrectAnswer,
    } = this.state;

    this.setState({
      showAnswer: false,
      currentQuestionIndex: newIndex + 1,
      correctAnswers: response ? newCorrectAnswer + 1 : newCorrectAnswer,
    });
    clearLocalNotification().then(setLocalNotification);
  };

  /**
   * @description function to reset quiz 
   */
  handleReset = () => {
    this.setState({
      showAnswer: false,
      currentQuestionIndex: 0,
      correctAnswers: 0,
    });
  };

  render() {
    const { showAnswer, currentQuestionIndex, correctAnswers } = this.state;
    const { questions, deckId, navigation } = this.props;

    if (!questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.quizTitle}>
            You can not take the test at this time. There are no cards in this
            deck
          </Text>
          <View>
            <TouchableOpacity
              style={[styles.btn, styles.coloredBtn]}
              onPress={() => {
                navigation.navigate('DeckDetail', {
                  deckId,
                  title: deckId,
                });
              }}
            >
              <Text style={{ color: white }}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (questions.length === currentQuestionIndex) {
      return (
        <View style={styles.container}>
          <Text style={styles.quizTitle}>
            {correctAnswers} correct answers out of {questions.length}
          </Text>
          <View>
            <TouchableOpacity
              style={[styles.btn, styles.transparentBtn]}
              onPress={() => this.handleReset()}
            >
              <Text style={{ color: pink }}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.coloredBtn]}
              onPress={() => {
                navigation.navigate('DeckDetail', {
                  deckId,
                  title: deckId,
                });
              }}
            >
              <Text style={{ color: white }}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.quizNum}>
          {currentQuestionIndex + 1}/{questions.length}
        </Text>
        <View>
          <Text style={styles.quizTitle}>
            {questions[currentQuestionIndex].question}
          </Text>
        </View>
        {showAnswer && (
          <View>
            <Text style={styles.answerLabel}>Answer</Text>
            <Text style={styles.quizAnswer}>
              {questions[currentQuestionIndex].answer}
            </Text>
          </View>
        )}
        <View style={styles.buttonsGroup}>
          {!showAnswer && (
            <View>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: pink }]}
                onPress={() => this.setState({ showAnswer: true })}
              >
                <Text style={{ color: white }}>Show Answer</Text>
              </TouchableOpacity>
            </View>
          )}
          {showAnswer && (
            <View>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: green }]}
                onPress={() => this.handleResponse(true)}
              >
                <Text style={{ color: white }}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: red }]}
                onPress={() => this.handleResponse(false)}
              >
                <Text style={{ color: white }}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (decks, { route }) => {
  const { deckId } = route.params;
  return {
    deckId,
    questions: decks[deckId].questions,
  };
};

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  quizNum: {
    alignItems: 'flex-start',
  },
  quizTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  quizAnswer: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: green,
  },
  answerLabel: {
    color: red,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonsGroup: {
    alignItems: 'center',
    marginBottom: 50,
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
