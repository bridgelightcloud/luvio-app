import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenBase, Center, Text } from '../styled/components';

const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <ScreenBase>
      <Center>
        <Text>Events</Text>
      </Center>
    </ScreenBase>
  // {/* <AppHeader route={route}/> */}
  // <Stack.Navigator headerMode="none">
  //   <Stack.Screen name="Overview" component={ScreenBase} />
  // </Stack.Navigator>
  );
}
