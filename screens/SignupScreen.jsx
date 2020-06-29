import React from 'react';
import { Text, Content } from 'native-base';
import BlockButton from '../components/BlockButton';

export default function SignUpScreen({ navigation }) {
  return (
    <Content padder>
      <Text>Sign Up...</Text>
      <BlockButton
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text>Cancel</Text>
      </BlockButton>
      <BlockButton>
        <Text>Submit</Text>
      </BlockButton>
    </Content>
  );
}
