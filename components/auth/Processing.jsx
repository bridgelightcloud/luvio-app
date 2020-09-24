/* eslint-disable no-fallthrough */
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import util from '../../utilities';
import {
  Center, Text, ScreenBase, ActivityIndicator,
} from '../../styled/components';

export default function Processing(props) {
  const { navigation, route } = props;
  const { params } = route;

  async function createSession() {
    const response = await util.Models.Session.createSession(params.token);
    const session = response.data;

    switch (response.code) {
      case 'SESSION_CREATED':
        AsyncStorage.setItem('@session', JSON.stringify(session));
        util.Actions.setSession(session);
        navigation.replace('view', { account: { id: session.id } });
        break;
      case 'INVALID_TOKEN':
      case 'EXPIRED_TOKEN':
        navigation.replace('sign-in', { badToken: true });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (params && params.token) {
      createSession();
    }
  }, [params]);

  return (
    <ScreenBase>
      <Center>
        <Text>Loggin in...</Text>
        <ActivityIndicator />
      </Center>
    </ScreenBase>
  );
}
