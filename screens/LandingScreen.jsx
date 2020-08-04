import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack/';
import SvgLuvio from '../components/svg/SvgLuvio';
import {
  ScreenBase, Row, Center, Text,
} from '../styled/components';
import SignIn from '../components/landing-screen/SignIn';
import MagicLink from '../components/landing-screen/MagicLink';
import Processing from '../components/landing-screen/Processing';

const CenterStack = createStackNavigator();

function LandingScreen({ route }) {
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
          <CenterStack.Screen
            name="processing"
            component={Processing}
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
  };
}

export default connect(mapStateToProps)(LandingScreen);
