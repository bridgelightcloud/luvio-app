/* eslint-disable react/jsx-filename-extension */
/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppFooter from './components/AppFooter';
import util from './utilities';
import AuthScreen from './screens/AuthScreen';
import AccountStack from './stacks/AccountStack';
import FeedScreen from './screens/FeedScreen';

const AppTab = createBottomTabNavigator();

function App() {
  const [appReady, setAppReady] = useState(false);
  const [linking, setLinking] = useState(null);

  // Load all the necessary data and assets
  useEffect(() => {
    util.Loader.loadDataAndAssets(
      setAppReady,
      setLinking,
    );
  }, []);

  return (
    <Provider store={util.Store}>
      <NavigationContainer linking={linking}>
        <StatusBar backgroundColor="#0d1821" barStyle="light-content" />
        <AppTab.Navigator tabBar={(props) => <AppFooter {...props} />}>
          <AppTab.Screen
            name="feed"
            component={FeedScreen}
            options={{
              title: 'Feed',
              icon: 'newspaper',
              show: true,
            }}
          />
          <AppTab.Screen
            name="account"
            component={AccountStack}
            options={{
              title: 'Account',
              icon: 'user',
              show: true,
            }}
          />
        </AppTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
