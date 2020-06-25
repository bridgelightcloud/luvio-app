import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container } from 'native-base';
import AppHeader from '../components/AppHeader';
import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function HomeStack(props){
  return(
    <Container>
      <AppHeader {...props}/>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </Container>
  )
}