import React from 'react';
import { View, Card, Form, Item, Input, Icon, Label } from 'native-base';

export default function LoginScreen(props){
  return (
    <View padder>
      <Form>
        <Item floatingLabel>
          <Label>email address</Label>
          <Input textContentType="emailAddress" />
        </Item>
        <Item floatingLabel>
          <Label>password</Label>
          <Input textContentType="password" secureTextEntry/>
        </Item>
      </Form>
    </View>
  )
}