import React from 'react';
import { connect } from 'react-redux';
import SvgLuvio from '../components/svg/SvgLuvio';
import SignIn from '../components/SignIn';
import MagicLink from '../components/MagicLink';
import {
  ScreenBase, Row, Center,
} from '../styled/components';

function LandingScreen({ landing }) {
  let form = null;
  switch (landing) {
    case 'SignIn':
      form = <SignIn />;
      break;
    case 'MagicLink':
      form = <MagicLink />;
      break;
    case 'Welcome':
      form = null;
      break;
    default:
  }

  return (
    <ScreenBase>
      <Row>
        <Center>
          <SvgLuvio />
        </Center>
      </Row>
      <Row>
        <Center>
          {form}
        </Center>
      </Row>
      <Row />
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
    landing: store.landingState,
  };
}

export default connect(mapStateToProps)(LandingScreen);
