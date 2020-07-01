import store from './Store';

function setSessionAction(session) {
  return {
    type: 'SET_SESSION',
    session,
  };
}

function setSession(session) {
  store.dispatch(setSessionAction(session));
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
  setSession,
  setSetting,
};
