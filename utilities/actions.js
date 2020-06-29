import store from './store';

function setUserAction(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

function setUser(user) {
  store.dispatch(setUserAction(user));
}

function setSettingAction(setting) {
  return {
    type: setting.name,
    value: setting.value,
  };
}

function setSetting(setting) {
  store.dispatch(setSettingAction(setting));
}

export default {
  setUser,
  setSetting,
};
