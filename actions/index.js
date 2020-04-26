import {
  getDecks,
  saveDeckTitle,
  deleteDeck,
  addCardToDeck,
} from '../utils/api';

export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const DELETE_DECK = 'DELETE_DECK';

/**
 *
 * @param {*} decks receives decks
 * @returns an object with the FETCH_DECKS type and decks
 */
const fetchDecks = (decks) => {
  return {
    type: FETCH_DECKS,
    decks,
  };
};

/**
 * @description function to handle Fetching decks from AsynStorage Database
 */
export const handleFetchingDecks = () => {
  return (dispatch) => {
    return getDecks().then((decks) => dispatch(fetchDecks(decks)));
  };
};

/**
 *
 * @param title receives deck title
 * @returns an object with the ADD_DECK_TITLE type and title
 */
const addDeckTitle = (title) => {
  return {
    type: ADD_DECK_TITLE,
    title,
  };
};

/**
 * @param title receives deck title
 * @description function to handle adding deck title to our async Storage
 */
export const handleAddingDeckTitle = (title) => {
  return async (dispatch) => {
    await saveDeckTitle(title);
    return dispatch(addDeckTitle(title));
  };
};

/**
 *
 * @param {*} title receives deck title
 * @param {*} card receives deck card
 * @returns an object with the ADD_CARD_TO_DECK type, title and card
 */
const addCard = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  };
};

/**
 * @param title receives deck title and card
 * @description function to handle adding a card to deck
 */
export const handleAddCard = (title, card) => {
  return async (dispatch) => {
    await addCardToDeck(title, card);
    return dispatch(addCard(title, card));
  };
};

/**
 *
 * @param {*} key receives deck key
 * @returns an object with the DELETE_DECK type and key
 */
const removeDeck = (key) => {
  return {
    type: DELETE_DECK,
    key,
  };
};

/**
 * @param title receives deck key
 * @description function to handle deleting deck
 */
export const handleDeleteDeck = (key) => {
  return async (dispatch) => {
    await deleteDeck(key);
    return dispatch(handleFetchingDecks());
  };
};
