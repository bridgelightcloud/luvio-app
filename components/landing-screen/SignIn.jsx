import React, { useState, useEffect } from 'react';
import models from '../../models';
import {
  TextInput, Button, Text, Center, ScreenBase,
} from '../../styled/components';

export default function SignIn(props) {
  const { navigation, route } = props;
  const { params } = route;
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(email.trim());
  }, [email]);

  async function sendMagicLink() {
    if (email) {
      await models.Token.sendMagicLink(email);
      navigation.navigate('magic-link', { email });
    }
  }

  return (
    <ScreenBase>
      <Center>
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
            <Text dark>make it rain</Text>
          </Center>
        </Button>
      </Center>
    </ScreenBase>
  );
}
