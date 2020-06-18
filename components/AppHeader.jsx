import React from 'react';
import { Header, Left, Right, Body, Title, Icon } from 'native-base';
import { useRoute } from '@react-navigation/native';

export default function AppHeader({ route }){
  return(
    <Header>
      <Left />
      <Body>
        <Title>{route.name}</Title>
      </Body>
      <Right />
    </Header>
  )
}