import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Form, Item, Input, Label, Button, Text } from 'native-base';
import Util from '../utilities';
import BlockButton from '../components/BlockButton';
const { setUser } = Util;

function LoginScreen({ navigation, user }){
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View padder>
      <Form>
        <Item>
          <Input
            textContentType="emailAddress"
            onChangeText={setEmailAddress}
            value={emailAddress}
            placeholder="email address"
          />
        </Item>
        <Item>
          <Input
            textContentType="password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            placeholder="password"
          />
        </Item>
        <BlockButton
          onPress={()=>{
            navigation.popToTop();
          }}
        >
          <Text>Cancel</Text>
        </BlockButton>
        <BlockButton
          onPress={()=>{
            setUser('Seanny');
            navigation.popToTop();
          }}
        >
          <Text>Log In</Text>
        </BlockButton>
      </Form>
    </View>
  )
}

function mapStateToProps(store){
  return {
    user: store.userState,
  };
}

export default connect(mapStateToProps)(LoginScreen);