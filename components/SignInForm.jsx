import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import models from '../models';
import {
  TextInput, Button, Text, Center,
} from '../styled/components';

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
          <Text>make it rain</Text>
        </Center>
      </Button>
    </Center>
  );
}

export default SignInForm;
