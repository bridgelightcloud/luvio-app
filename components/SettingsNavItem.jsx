import React from 'react';
import {
  ListItem, Left, Icon, Body, Text, Right,
} from 'native-base';

export default function SettingsNavItem({
  icon, title, destination, navigation,
}) {
  return (
    <ListItem
      icon
      onPress={() => navigation.navigate(destination)}
    >
      <Left>
        <Icon name={icon} type="FontAwesome5" />
      </Left>
      <Body>
        <Text>{title}</Text>
      </Body>
      <Right>
        <Icon name="chevron-right" type="FontAwesome5" />
      </Right>
    </ListItem>
  );
}
