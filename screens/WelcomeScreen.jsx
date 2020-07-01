/* eslint-disable no-fallthrough */
import React from 'react';
import {
  Text, Content,
} from 'native-base';
import { connect } from 'react-redux';

function WelcomeScreen({ navigation, route, session }) {
  // navigation.reset();

  console.log(session);

  return (
    <Content>
      <Content>
        <Text>Welcome</Text>
      </Content>
    </Content>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(WelcomeScreen);
