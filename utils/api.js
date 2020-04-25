import { AsyncStorage } from 'react-native';

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const DECKS_KEY = 'DECKS_KEY';

/**
 * @description Function to fetch all Decks from AyncStorage and in case there is nothing
 * it will set default decks in the storage
 * @returns {Object} decks
 */
export const getDecks = async () => {
  const newDecks = await AsyncStorage.getItem(DECKS_KEY).then(JSON.parse);
  return newDecks === null
    ? await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    : newDecks;
};

/**
 *
 * @param id Deck id
 * @description Function to fetch decks and filter to return single deck
 * @returns an object to the selected deck
 */
export const getDeck = (id) => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then((results) => results[id]);
};

/**
 *
 * @param {string} title This is the title of the deck to be recorded
 * @description Function to save new deck title
 * @returns Recorded Deck
 */
export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [title]: { title, questions: [] },
    })
  );
};

/**
 * 
 * @param {*} title  Deck title
 * @param {*} card  Card to add to deck
 * @description  function to add card to deck
 * @returns new Deck with card
 */
export const addCardToDeck = async (title, card) => {
  const decks = await AsyncStorage.getItem(DECKS_KEY).then(JSON.parse);
  decks[title].questions.push(card);
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
};

/**
 *
 * @param {*} key receives the deck key
 * @description Deletes deck
 *
 */
export const deleteDeck = async (key) => {
  const results = await AsyncStorage.getItem(DECKS_KEY);
  const data = JSON.parse(results);
  data[key] = undefined;
  delete data[key];
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
};
