import React from 'react';
import { Text, Container } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import AppHeader from '../components/AppHeader';
import OverviewScreen from '../screens/OverviewScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createStackNavigator();

export default function SettingsStack(props) {
  return (
    <Container>
      <AppHeader {...props} />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="overview" component={OverviewScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </Container>
  );
}
