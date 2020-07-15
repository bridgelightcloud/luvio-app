import { AsyncStorage } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHomeLgAlt } from '@fortawesome/pro-duotone-svg-icons';
import Actions from './Actions';

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
  async loadDataAndAssets() {
    await Promise.all([
      getSession(),
      loadFonts(),
    ]);
  },
};

export default Loader;
