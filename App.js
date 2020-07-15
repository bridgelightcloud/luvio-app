import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Linking } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View } from 'react-native';
import LandingScreen from './screens/LandingScreen';
import AppFooter from './components/AppFooter';
import util from './utilities';

const prefix = Linking.makeUrl('/');
// console.log('prefix:', prefix);
const AppTab = createBottomTabNavigator();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  const linking = {
    prefixes: [prefix, 'https://app.getluv.io'],
    config: {
      screens: {
        SettingsStack: 'settings',
      },
    },
  };

  function setReady() {
    setAppReady(true);
  }

  if (!appReady) {
    return (
      <AppLoading
        startAsync={util.Loader.loadDataAndAssets}
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
