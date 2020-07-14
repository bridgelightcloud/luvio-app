import React from 'react';
import { View } from 'react-native';
import AppFooterTab from './AppFooterTab';

export default function AppFooter({ state, descriptors, navigation }) {
  if (state && descriptors && navigation) {
    const tabs = state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      options.key = route.key;
      options.route = route;
      options.focused = state.index === index;

      return (
        <AppFooterTab
          key={route.key}
          {...options}
          route={route}
          navigation={navigation}
        />
      );
    });

    return (
      <View>
        {tabs}
      </View>
    );
  }
}
