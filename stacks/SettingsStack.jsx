import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaymentCardTextField } from 'tipsi-stripe';
import SettingsViewScreen from '../screens/SettingsViewScreen';

const SettingsNav = createStackNavigator();

export default function SettingsStack({ route }) {
  console.log('settings stack');
  return (
    <PaymentCardTextField />
    // <SettingsNav.Navigator
    //   headerMode="none"
    // >
    //   <SettingsNav.Screen
    //     name="view"
    //     component={SettingsViewScreen}
    //   />
    // </SettingsNav.Navigator>
  );
}
