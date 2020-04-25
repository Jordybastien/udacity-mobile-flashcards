import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { red, white, green, pink } from '../utils/colors';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quizNum}>2/2</Text>
      <View>
        <Text style={styles.quizTitle}>
          Very Long text here to test how it worksVery Long text here to test
          how it works
        </Text>
        <Text style={styles.answerLabel}>Answer</Text>
      </View>
      <View style={styles.buttonsGroup}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: green }]}>
          <Text style={{ color: white }}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: red }]}>
          <Text style={{ color: white }}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

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
  answerLabel: {
    color: red,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonsGroup: {
    marginTop: 100,
    alignItems: 'center',
  },
  btn: {
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
});
