import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import AccountViewScreen from '../screens/AccountViewScreen';

const AccountNav = createStackNavigator();

function AccountStack() {
  return (
    <AccountNav.Navigator
      headerMode="none"
    >
      <AccountNav.Screen
        name="view"
        component={AccountViewScreen}
      />
      <AccountNav.Screen
        name="auth"
        component={AuthScreen}
      />
    </AccountNav.Navigator>
  );
}

export default AccountStack;
