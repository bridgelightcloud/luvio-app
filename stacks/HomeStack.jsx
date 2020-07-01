import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import LandingScreen from '../screens/LandingScreen';
import MagicLink from '../screens/MagicLinkScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

function HomeStack({ session }) {
  return (
    <Container>
      <Stack.Navigator headerMode="none" initialRouteName={session ? 'welcome' : 'landing'}>
        <Stack.Screen name="landing" component={LandingScreen} />
        <Stack.Screen name="magic-link" component={MagicLink} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </Container>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(HomeStack);
