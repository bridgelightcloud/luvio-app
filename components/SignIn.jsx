import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import models from '../models';
import {
  TextInput, Button, Text, Center,
} from '../styled/components';
import Slider from './Slider';
import util from '../utilities';

function SignIn() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setEmail(email.trim());
  }, [email]);

  async function sendMagicLink() {
    if (email) {
      await models.Token.sendMagicLink(email);
      util.Actions.setLanding('MagicLink');
    }
  }

  return (
    <Slider>
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
    </Slider>
  );
}

export default SignIn;
