/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';
import models from '../models';
import util from '../utilities';
import { Center, Text, ScreenBase } from '../styled/components';
import { brandInfo } from '../styled/styles';

function MagicLink(props) {
  const { navigation, route, session } = props;
  const { params } = route;

  async function createSession() {
    const response = await models.Session.createSession(params.token);

    switch (response.code) {
      case 'SESSION_CREATED':
        util.Actions.setSession(response.data);
        navigation.navigate('welcome');
      case 'INVALID_TOKEN':
      case 'EXPIRED_TOKEN':
        util.Actions.setLanding('sign-in');
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
        <Text>We&#39;ve sent an email to</Text>
        <Text style={{ color: brandInfo }}>{route.params.email}</Text>
        <Text>Follow the link to sign in.</Text>
      </Center>
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(MagicLink);
