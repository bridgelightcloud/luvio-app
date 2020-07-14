import React from 'react';
import {
  Tab, Button, Text, Center,
} from '../styled/components';

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
    <Tab
      active={focused}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Center>
        <Text>
          {title}
        </Text>
      </Center>
    </Tab>
  );
}
