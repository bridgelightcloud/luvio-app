/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import models from '../models';
import util from '../utilities';

function MagicLink({ navigation, route }) {
  const { params } = route;

  async function createSession() {
    const response = await models.Session.createSession(params.token);
    delete route.params.token;

    switch (response.code) {
      case 'SESSION_CREATED':
        util.Actions.setSession(response.data);
        navigation.replace('welcome');
      case 'INVALID_TOKEN':
      case 'EXPIRED_TOKEN':
        // navigation.navigate('landing');
        break;
      default:
        break;
    }
  }

  if (params && params.token) {
    createSession();
  }

  return (
    <Text>Please click the link sent to your email address.</Text>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(MagicLink);
