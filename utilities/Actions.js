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

// Location set and remove
function updateLocationAction(location) {
  return {
    type: 'UPDATE_LOCATION',
    location,
  };
}

function updateLocation(location) {
  store.dispatch(updateLocationAction(location));
}

function clearLocationAction() {
  return {
    type: 'CLEAR_LOCATION',
  };
}

function clearLocation() {
  store.dispatch(clearLocationAction());
}

const Actions = {
  setSession,
  setSetting,
  updateLocation,
  clearLocation,
};

export default Actions;
