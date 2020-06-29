import React from 'react';
import {
  ListItem, Left, Icon, Body, Text, Right, Switch,
} from 'native-base';
import Util from '../utilities';

export default function SettingsToggleItem({
  icon, title, settingName, settingValue,
}) {
  return (
    <ListItem
      icon
      onPress={() => {
        Util.setSetting({
          name: settingName,
          value: !settingValue,
        });
      }}
    >
      <Left>
        <Icon name={icon} type="FontAwesome5" />
      </Left>
      <Body>
        <Text>{title}</Text>
      </Body>
      <Right>
        <Switch value={settingValue} />
      </Right>
    </ListItem>
  );
}
