import React from 'react';
import { connect } from 'react-redux';
import SvgLuvio from '../components/svg/SvgLuvio';
import SignInForm from '../components/SignInForm';
import {
  ScreenBase, Text, Row, Center,
} from '../styled/components';

function LandingScreen() {
  return (
    <ScreenBase>
      <Row>
        <Center>
          <SvgLuvio />
        </Center>
      </Row>
      <Row>
        <Center>
          <SignInForm />
        </Center>
      </Row>
      <Row />
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(LandingScreen);
