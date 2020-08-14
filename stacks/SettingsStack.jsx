import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsViewScreen from '../screens/SettingsViewScreen';

const SettingsNav = createStackNavigator();

export default function SettingsStack({ route }) {
  return (
    <SettingsNav.Navigator
      headerMode="none"
    >
      <SettingsNav.Screen
        name="view"
        component={SettingsViewScreen}
      />
    </SettingsNav.Navigator>
  );
}
