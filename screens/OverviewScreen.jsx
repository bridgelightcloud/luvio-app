import React from 'react';
import { Content, List, Text } from 'native-base';
import SettingsNavItem from '../components/SettingsNavItem';
import SettingsToggleItem from '../components/SettingsToggleItem';

export default function OverviewScreen({ navigation, route }) {
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
      <Text>{route.params ? route.params.word : 'nothing'}</Text>
    </Content>
  );
}
