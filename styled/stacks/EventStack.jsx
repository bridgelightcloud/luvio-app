import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Text } from 'native-base';

const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <Container>
      {/* <AppHeader route={route}/> */}
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Overview" component={Text} />
      </Stack.Navigator>
    </Container>
  );
}
