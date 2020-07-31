/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';
import { Center, Text, ScreenBase } from '../../styled/components';
import { brandInfo } from '../../styled/styles';

function MagicLink(props) {
  const { navigation, route } = props;
  const { params } = route;

  if (params && params.token) {
    navigation.replace('processing', { ...params });
  }

  return (
    <ScreenBase>
      <Center>
        <Text>We&#39;ve sent an email to</Text>
        <Text style={{ color: brandInfo }}>{route.params.email}</Text>
        <Text>Follow the link to sign in.</Text>
      </Center>
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

export default connect(mapStateToProps)(MagicLink);
