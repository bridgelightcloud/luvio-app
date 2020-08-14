import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack/';
import SvgLuvio from '../components/svg/SvgLuvio';
import { ScreenBase, Row, Center } from '../styled/components';
import SignIn from '../components/auth/SignIn';
import MagicLink from '../components/auth/MagicLink';
import Processing from '../components/auth/Processing';
import ScreenHeader from '../components/ScreenHeader';

const CenterStack = createStackNavigator();

function AuthScreen() {
  return (
    <ScreenBase>
      <ScreenHeader title="Sign In" />
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

export default connect(mapStateToProps)(AuthScreen);
