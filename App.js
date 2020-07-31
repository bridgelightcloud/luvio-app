/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View } from 'react-native';
import AppFooter from './components/AppFooter';
import util from './utilities';
import LandingScreen from './screens/LandingScreen';

const AppTab = createBottomTabNavigator();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [linking, setLinking] = useState({});

  function setReady() {
    setAppReady(true);
  }

  if (!appReady) {
    return (
      <AppLoading
        startAsync={() => util.Loader.loadDataAndAssets(setLinking)}
        onFinish={setReady}
        onError={console.log}
      />
    );
  }

  return (
    <Provider store={util.Store}>
      <NavigationContainer linking={linking}>
        <StatusBar backgroundColor="#0d1821" barStyle="light-content" />
        <AppTab.Navigator tabBar={(props) => <AppFooter {...props} />}>
          <AppTab.Screen
            name="home"
            component={LandingScreen}
            options={{
              title: 'Home',
              icon: 'home',
            }}
          />
          <AppTab.Screen
            name="settings"
            component={View}
            options={{
              title: 'Settings',
              icon: 'cog',
            }}
          />
        </AppTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
