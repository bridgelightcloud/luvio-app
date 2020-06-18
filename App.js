import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Root, Container, Footer } from 'native-base';
import { AppLoading } from 'expo';
import AppHeader from './components/AppHeader';
import HomeStack from './stacks/HomeStack';
import SettingsStack from './stacks/SettingsStack';

const AppStack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    loadFonts();
  });

  async function loadFonts(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setFontsLoaded(true);
  }

  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  }

  return (
    <Root>
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="HomeStack" component={HomeStack} />
          <AppStack.Screen name="SettingsStack" component={SettingsStack} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Root>
  );
}