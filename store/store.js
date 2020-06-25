import { createStore, combineReducers } from 'redux';

function userReducer(state = null, action){
  switch (action.type){
    case 'SET_USER':
      return action.user;
    default:
      return state;
  }
}

function testReducer(state = "Hello, fuckers!", action){
  return state;
}

const reducers = combineReducers({
  userState: userReducer,
  testState: testReducer,
});

export default store = createStore(reducers);