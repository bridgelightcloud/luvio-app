import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  Tab, Text, Center,
} from '../styled/components';
import { colors } from '../styled/components/variables';

const set = 'fas';

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

  return (
    <Tab
      focused={focused}
      onPress={onPress}
    >
      <Center>
        <FontAwesomeIcon icon={[set, icon]} color={colors.brandDark} size={22} />
        <Text Dark>
          {title}
        </Text>
      </Center>
    </Tab>
  );
}
