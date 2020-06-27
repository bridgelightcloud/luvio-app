import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content, Text } from 'native-base';
import AppHeader from '../components/AppHeader';

const Stack = createStackNavigator();

export default function EventStack({navigation, route}){
  return(
    <Container>
      {/* <AppHeader route={route}/> */}
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Overview" component={Text} />
      </Stack.Navigator>
    </Container>
  )
}