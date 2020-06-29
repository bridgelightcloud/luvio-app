import React from 'react';
import { Button, Text, Icon } from 'native-base';

export default function AppFooterTab({
  route, navigation, title, icon, focused,
}) {
  function onPress() {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!focused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  }

  function onLongPress() {

  }

  return (
    <Button
      active={focused}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon name={icon} type="FontAwesome5" />
      <Text>{title}</Text>
    </Button>
  );
}
