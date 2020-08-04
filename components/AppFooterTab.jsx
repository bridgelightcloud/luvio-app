import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHomeLgAlt } from '@fortawesome/pro-solid-svg-icons';
import {
  Tab, Text, Center,
} from '../styled/components';

export default function AppFooterTab({
  route, navigation, show, title, icon, focused,
}) {
  if (!show) {
    return null;
  }
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
        <FontAwesomeIcon icon={faHomeLgAlt} color="#0D1821" size={25} />
        <Text dark>
          {title}
        </Text>
      </Center>
    </Tab>
  );
}
