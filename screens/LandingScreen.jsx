import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import SignInForm from '../components/SignInForm';

function LandingScreen(props) {
  return (
    <View>
      <SignInForm />
    </View>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(LandingScreen);
