import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Root } from 'native-base';
import HomeStack from './stacks/HomeStack';
import SettingsStack from './stacks/SettingsStack';
import AppFooter from './components/AppFooter';
import EventStack from './stacks/EventStack';
import util from './utilities';

const { store, setUser } = util;

const AppTab = createBottomTabNavigator();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  async function loadDataAndAssets(){
    return promise = Promise.all([
      getUser(),
      loadFonts(),
    ]);
  }

  async function loadFonts() {
    try{
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    }
    catch(err){
      console.warn(err);
    }
  }

  async function getUser(){
    try{
      const user = await AsyncStorage.getItem('@currentUser');
      setUser(user);
    }
    catch(err){
      console.warn(err);
    }
  }

  function setReady(){
    setAppReady(true);
  }

  if(!appReady){
    return(
      <AppLoading 
        startAsync={loadDataAndAssets}
        onFinish={setReady}
        onError={console.warn}
      />
    )
  }

  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <AppTab.Navigator tabBar={(props)=><AppFooter {...props} />}>
            <AppTab.Screen
              name="HomeStack"
              component={HomeStack}
              options={{
                title:'Home',
                icon:'home',
              }}
            />
            <AppTab.Screen
              name="EventStack"
              component={EventStack}
              options={{
                title:'Events',
                icon: 'ticket-alt'
              }}
            />
            <AppTab.Screen
              name="SettingsStack"
              component={SettingsStack}
              options={{
                title:'Settings',
                icon:'cog'
              }}
            />
          </AppTab.Navigator>
        </NavigationContainer>
      </Root>
    </Provider>
  );
}