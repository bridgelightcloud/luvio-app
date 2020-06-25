import React from 'react';
import { Card, Text, Button, Content } from 'native-base';

export default function SignUpScreen({ navigation }){
  return (
    <Content padder>
      <Card>
        <Text>Sign Up...</Text>
        <Button
          onPress={()=>{
            navigation.popToTop();
          }}
        >
          <Text>Cancel</Text>
        </Button>
        <Button>
          <Text>Submit</Text>
        </Button>
      </Card>
    </Content>
  );
}