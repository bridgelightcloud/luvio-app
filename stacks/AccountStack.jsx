import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';

const AccountNav = createStackNavigator();

function AccountStack() {
  return (
    <AccountNav.Navigator
      headerMode="none"
    >
      <AccountNav.Screen
        name="auth"
        component={AuthScreen}
      />
    </AccountNav.Navigator>
  );
}

export default AccountStack;
