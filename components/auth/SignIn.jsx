import React, { useState, useEffect } from 'react';
import util from '../../utilities';
import {
  Button, Text, Center, ScreenBase,
} from '../../styled/components';
import TextInput from '../../styled/components/TextInput';

export default function SignIn({ navigation, route }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(email.trim());
  }, [email]);

  async function sendMagicLink() {
    if (email) {
      await util.Models.Token.sendMagicLink(email);
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
          returnKeyType="send"
          onChangeText={setEmail}
          onSubmitEditing={sendMagicLink}
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
