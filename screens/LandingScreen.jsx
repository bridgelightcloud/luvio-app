import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack/';
import { Platform } from 'react-native';
import SvgLuvio from '../components/svg/SvgLuvio';
import SignIn from '../components/landing-screen/SignIn';
import MagicLink from '../components/landing-screen/MagicLink';
import {
  ScreenBase, Row, Center, Text,
} from '../styled/components';
import Processing from '../components/landing-screen/Processing';
import styles from '../styled/styles';

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
      <Row>
        {/* <Text>{`Platform: ${Platform.OS}`}</Text>
        <Text>{`Mobile? ${isMobile}`}</Text> */}
        {route.params && route.params.badToken
          ? <Text style={{ color: 'red' }}>Sign-in token was invalid or expired. Please try again.</Text>
          : null}
      </Row>
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
