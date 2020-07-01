import { AsyncStorage } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
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
  try {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  } catch (err) {
    console.log(err);
  }
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
