/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';
import models from '../models';
import util from '../utilities';
import Slider from './Slider';
import { Center, Text } from '../styled/components';

function MagicLink() {
  async function createSession() {
    const response = await models.Session.createSession(params.token);

    switch (response.code) {
      case 'SESSION_CREATED':
        util.Actions.setSession(response.data);
        util.Actions.setLanding('Welcome');
      case 'INVALID_TOKEN':
      case 'EXPIRED_TOKEN':
        util.Actions.setLanding('Landing');
        break;
      default:
        break;
    }
  }

  // if (params && params.token) {
  //   createSession();
  // }

  return (
    <Slider>
      <Center>
        <Text>Please click the link sent to your email address. If you do not receive an email in a few minutes, please verify that you entered the correct email address.</Text>
      </Center>
    </Slider>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
    landing: store.landingState,
  };
}

export default connect(mapStateToProps)(MagicLink);
