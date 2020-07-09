import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Linking } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Root, Container } from 'native-base';
import HomeStack from './stacks/HomeStack';
import AppFooter from './components/AppFooter';
import util from './utilities';

const prefix = Linking.makeUrl('/');
console.log('prefix:', prefix);
const AppTab = createBottomTabNavigator();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  const linking = {
    prefixes: [prefix, 'https://tipper.seannyphoenix.com'],
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
        <Root>
          <Container>
            <AppTab.Navigator tabBar={(props) => <AppFooter {...props} />}>
              <AppTab.Screen
                name="home"
                component={HomeStack}
                options={{
                  title: 'Home',
                  icon: 'home',
                }}
              />
            </AppTab.Navigator>
          </Container>
        </Root>
      </NavigationContainer>
    </Provider>
  );
}
