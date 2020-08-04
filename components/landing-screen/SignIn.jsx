import React, { useState, useEffect } from 'react';
import models from '../../models';
import {
  TextInput, Button, Text, Center, ScreenBase,
} from '../../styled/components';

export default function SignIn({ navigation, route }) {
  console.log('sign-in:', route);

  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(email.trim());
  }, [email]);

  async function sendMagicLink() {
    if (email) {
      await models.Token.sendMagicLink(email);
      navigation.navigate('magic-link', { email, token: null });
    }
  }

  return (
    <ScreenBase>
      <Center>
        {route.params && route.params.badToken
          ? (
            <>
              <Text Warn>Sign-in token was invalid or expired.</Text>
              <Text Warn>Please try again.</Text>
            </>
          )
          : null}
        <TextInput
          rounded
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          placeholder="email address"
        />
        <Button onPress={sendMagicLink}>
          <Center>
            <Text Dark>make it rain</Text>
          </Center>
        </Button>
      </Center>
    </ScreenBase>
  );
}
