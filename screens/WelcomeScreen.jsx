/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

function WelcomeScreen({ navigation, route, session }) {
  return (
    <Text>Welcome</Text>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(WelcomeScreen);
