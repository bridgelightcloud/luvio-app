import React from 'react';
import { Content, List, Text } from 'native-base';
import SettingsToggleItem from '../components/SettingsToggleItem';

export default function NotificationsScreen({ navigation }){
  return (
    <Content padder>
      <List>
        <SettingsToggleItem
          icon="bell"
          title="Notifications"
          destination="Notifications"
          navigation={navigation}
        />
      </List>
    </Content>
  )
}