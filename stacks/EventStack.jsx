import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventViewScreen from '../screens/AccountViewScreen';

const EventNav = createStackNavigator();

export default function EventStack({ route }) {
  return (
    <EventNav.Navigator
      headerMode="none"
    >
      <EventNav.Screen
        name="view"
        component={EventViewScreen}
      />
    </EventNav.Navigator>
  );
}
