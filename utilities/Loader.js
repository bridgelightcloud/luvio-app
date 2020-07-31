import { AsyncStorage } from 'react-native';
import * as Linking from 'expo-linking';
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

async function initLinking(setLinking) {
  const prefix = Linking.makeUrl('/');
  const linking = {
    prefixes: [prefix, 'https://app.getluv.io', 'https://getluv.io', 'luvio://'],
    config: {
      screens: {
        SettingsStack: 'settings',
      },
    },
  };
  setLinking(linking);
}

const Loader = {
  async loadDataAndAssets(setLinking) {
    await Promise.all([
      initLinking(setLinking),
      getSession(),
      loadFonts(),
    ]);
  },
};

export default Loader;
