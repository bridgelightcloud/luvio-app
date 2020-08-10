import { createStore, combineReducers } from 'redux';

function sessionReducer(state = null, action) {
  switch (action.type) {
    case 'SET_SESSION':
      return action.session;
    default:
      return state;
  }
}

function settingsReducer(state = {}, action) {
  switch (action.type) {
    case 'DARK_MODE':
      return { ...state, darkMode: action.value };
    default:
      return { ...state };
  }
}

function searchResultsReducer(state = [], action) {
  switch (action.type) {
    case 'SET_RESULTS':
      return action.results;
    case 'CLEAR_RESULTS':
      return [];
    default:
      return state;
  }
}

const reducers = combineReducers({
  sessionState: sessionReducer,
  settingsState: settingsReducer,
  searchResults: searchResultsReducer,
});

export default createStore(reducers);
