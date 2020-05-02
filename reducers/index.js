import { ADD_CARD_TO_DECK, ADD_DECK_TITLE, FETCH_DECKS } from '../actions';

/**
 * @description decks Reducer
 * @param   state which is initialized to an empty object
 * @param   action will receive action containing type and other necessary data
 * @returns object to make changes to the decks state
 */
const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...action.decks,
      };
    case ADD_DECK_TITLE:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] },
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: state[action.title].questions.concat(action.card),
        },
      };
    default:
      return state;
  }
};

export default decks;
