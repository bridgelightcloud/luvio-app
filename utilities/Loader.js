import AsyncStorage from '@react-native-community/async-storage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHomeLgAlt } from '@fortawesome/pro-duotone-svg-icons';
import Actions from './Actions';

async function initLinking(setLinking) {
  const linking = {
    prefixes: ['https://app.getluv.io'],
  };
  setLinking(linking);
}

async function getSession() {
  try {
    const session = await AsyncStorage.getItem('@currentSession');
    Actions.setSession(session);
  } catch (err) {
    console.log(err);
  }
}

async function loadFonts() {
  library.add(faHomeLgAlt);
  return null;
}

const Loader = {
  async loadDataAndAssets(setAppReady, setLinking, setLinkUrl) {
    console.log('Loading Data and Assets');
    await Promise.all([
      initLinking(setLinking, setLinkUrl),
      getSession(),
      loadFonts(),
    ]);
    setAppReady(true);
  },
};

export default Loader;
