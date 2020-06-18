import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content } from 'native-base';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function HomeStack({route}){
  return(
    <Container>
      <AppHeader route={route}/>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
      <AppFooter />
    </Container>
  )
}