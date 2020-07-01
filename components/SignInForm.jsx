import React, { useState, useEffect } from 'react';
import { Form, Input, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import BlockButton from './BlockButton';
import models from '../models';

function SignInForm() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setEmail(email.trim());
  }, [email]);

  async function sendMagicLink() {
    if (email) {
      await models.Token.sendMagicLink(email);
      navigation.navigate('magic-link');
    }
  }

  return (
    <Form>
      <Input
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholder="email address"
      />
      <BlockButton
        onPress={sendMagicLink}
      >
        <Text>Sign In or Sign Up</Text>
      </BlockButton>
    </Form>
  );
}

export default SignInForm;
