import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Content } from 'native-base';
import SignInForm from '../components/SignInForm';

function LandingScreen(props) {
  return (
    <Content padder>
      <SignInForm />
    </Content>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(LandingScreen);
