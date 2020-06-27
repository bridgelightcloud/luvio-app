import React, { useState } from 'react';
import { Content, List, Text } from 'native-base';
import SettingsNavItem from '../components/SettingsNavItem';
import SettingsToggleItem from '../components/SettingsToggleItem';

export default function OverviewScreen({ navigation }){
  return (
    <Content padder>
      <List>
        <SettingsToggleItem 
          icon="sun"
          title="Dark Mode"
          settingName="DARK_MODE"
          setSetting={null}
        />
        <SettingsNavItem
          icon="bell"
          title="Notifications"
          destination="Notifications"
          navigation={navigation}
        />
      </List>
      <Text>Details</Text>
    </Content>
  )
}