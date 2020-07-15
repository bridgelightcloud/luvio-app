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

function landingReducer(state = 'SignIn', action) {
  switch (action.type) {
    case 'SET_LANDING':
      return action.state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  sessionState: sessionReducer,
  settingsState: settingsReducer,
  landingState: landingReducer,
});

export default createStore(reducers);
