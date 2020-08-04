/* eslint-disable no-fallthrough */
import React, { useEffect } from 'react';
import { Center, Text, ScreenBase } from '../../styled/components';
import { brandPrimary } from '../../styled/styles';

export default function MagicLink(props) {
  const { navigation, route } = props;
  const { params } = route;

  useEffect(() => {
    if (params && params.token) {
      navigation.setParams(null);
      navigation.replace('processing', { ...params });
    }
  }, [params]);

  return (
    <ScreenBase>
      <Center>
        <Text>We&#39;ve sent an email to</Text>
        <Text style={{ color: brandPrimary }}>{route.params.email}</Text>
        <Text>Follow the link to sign in.</Text>
      </Center>
    </ScreenBase>
  );
}
