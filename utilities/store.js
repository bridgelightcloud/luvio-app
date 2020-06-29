import { createStore, combineReducers } from 'redux';

function userReducer(state = null, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
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
  userState: userReducer,
  settingsState: settingsReducer,
});

export default createStore(reducers);
