import { AsyncStorage } from 'react-native';
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
