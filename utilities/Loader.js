import AsyncStorage from '@react-native-community/async-storage';
import {
  library,
} from '@fortawesome/fontawesome-svg-core';
import {
  far,
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
} from '@fortawesome/pro-solid-svg-icons';
import Actions from './Actions';
import Models from './models';

async function initDeepLink(setLinking) {
  const linking = {
    prefixes: ['https://app.getluv.io'],
  };
  setLinking(linking);
}

async function getSession() {
  try {
    const session = JSON.parse(await AsyncStorage.getItem('@session'));
    if (session) {
      // Verify the current session
      // A session is only valid if it hasn't expired
      const validate = await Models.Session.verifySession(session.id);
      if (!validate.success) {
        // Don't remove the session if the network is down
        if (validate.code !== 'NETWORK_ERROR') {
          await AsyncStorage.removeItem('@session');
        }
        return;
      }
      Actions.setSession(session);
    }
  } catch (err) {
    console.error(err);
  }
}

async function loadFonts() {
  library.add(far, fas);
}

const Loader = {
  async loadDataAndAssets(setAppReady, setDeepLink) {
    await Promise.all([
      initDeepLink(setDeepLink),
      getSession(),
      loadFonts(),
    ]);
    setAppReady(true);
  },
};

export default Loader;
