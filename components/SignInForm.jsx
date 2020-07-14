import React, { useState, useEffect } from 'react';
import {
  TextInput, View, Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    <View>
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
      <Button
        onPress={sendMagicLink}
        title="Continue"
      />
    </View>
  );
}

export default SignInForm;
