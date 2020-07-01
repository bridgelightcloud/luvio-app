import { createStore, combineReducers } from 'redux';

function sessionReducer(state = null, action) {
  switch (action.type) {
    case 'SET_SESSION':
      console.log('setting session');
      console.log(action.session);
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

const reducers = combineReducers({
  sessionState: sessionReducer,
  settingsState: settingsReducer,
});

export default createStore(reducers);
