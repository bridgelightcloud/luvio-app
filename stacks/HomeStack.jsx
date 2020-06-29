import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import LandingScreen from '../screens/LandingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

function HomeStack(props) {
  // We show a different screen based on whether a user is loged in or not
  const initialRoute = props.user
    ? {
      screen: <Stack.Screen name="Welcome" component={WelcomeScreen} />,
      name: 'Welcome',
    }
    : {
      screen: <Stack.Screen name="Landing" component={LandingScreen} />,
      name: 'Landing',
    };

  return (
    <Container>
      <AppHeader {...props} />
      <Stack.Navigator headerMode="none" initialRouteName={initialRoute.name}>
        { initialRoute.screen }
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </Container>
  );
}

function mapStateToProps(store) {
  return {
    user: store.userState,
  };
}

export default connect(mapStateToProps)(HomeStack);
