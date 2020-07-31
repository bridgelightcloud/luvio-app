/* eslint-disable no-fallthrough */
import React from 'react';
import models from '../../models';
import util from '../../utilities';
import {
  Center, Text, ScreenBase, ActivityIndicator,
} from '../../styled/components';

export default function Processing(props) {
  const { navigation, route } = props;
  const { params } = route;

  console.log(route);

  async function createSession() {
    const response = await models.Session.createSession(params.token);

    switch (response.code) {
      case 'SESSION_CREATED':
        util.Actions.setSession(response.data);
        navigation.navigate('welcome');
      case 'INVALID_TOKEN':
      case 'EXPIRED_TOKEN':
        util.Actions.setLanding('sign-in', { badToken: true });
        break;
      default:
        break;
    }
  }

  if (params && params.token) {
    createSession();
  }

  return (
    <ScreenBase>
      <Center>
        <Text>Loggin in...</Text>
        <ActivityIndicator />
      </Center>
    </ScreenBase>
  );
}
