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
import AccountStack from './stacks/AccountStack';
import FeedScreen from './screens/FeedScreen';
import EventStack from './stacks/EventStack';
import SettingsStack from './stacks/SettingsStack';
import { colors } from './styled/components/variables';

const AppTab = createBottomTabNavigator();

function App() {
  const [appReady, setAppReady] = useState(false);
  const [deepLink, setDeepLink] = useState(null);

  // Load all the necessary data and assets
  useEffect(() => {
    util.Loader.loadDataAndAssets(
      setAppReady,
      setDeepLink,
    );
  }, []);

  return (
    <Provider store={util.Store}>
      <NavigationContainer linking={deepLink}>
        <StatusBar backgroundColor={colors.brandPrimary} barStyle="dark-content" />
        <AppTab.Navigator tabBar={(props) => <AppFooter {...props} />}>
          <AppTab.Screen
            name="feed"
            component={FeedScreen}
            options={{
              title: 'Feed',
              icon: 'newspaper',
              show: appReady && true,
            }}
          />
          <AppTab.Screen
            name="events"
            component={EventStack}
            options={{
              title: 'Events',
              icon: 'calendar-alt',
              show: appReady && true,
            }}
          />
          <AppTab.Screen
            name="accounts"
            component={AccountStack}
            options={{
              title: 'Account',
              icon: 'user',
              show: appReady && true,
            }}
          />
          <AppTab.Screen
            name="settings"
            component={SettingsStack}
            options={{
              title: 'Settings',
              icon: 'cog',
              show: appReady && true,
            }}
          />
        </AppTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
