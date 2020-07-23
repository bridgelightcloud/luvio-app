import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack/';
import SvgLuvio from '../components/svg/SvgLuvio';
import SignIn from '../components/SignIn';
import MagicLink from '../components/MagicLink';
import {
  ScreenBase, Row, Center,
} from '../styled/components';

const CenterStack = createStackNavigator();

function LandingScreen() {
  return (
    <ScreenBase>
      <Row>
        <Center>
          <SvgLuvio />
        </Center>
      </Row>
      <Row>
        <CenterStack.Navigator
          initialRouteName="sign-in"
          headerMode="none"
        >
          <CenterStack.Screen
            name="sign-in"
            component={SignIn}
          />
          <CenterStack.Screen
            name="magic-link"
            component={MagicLink}
          />
        </CenterStack.Navigator>
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
