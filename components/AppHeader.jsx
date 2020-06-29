import React from 'react';
import {
  Header, Left, Right, Body, Title,
} from 'native-base';

export default function AppHeader({ route }) {
  return (
    <Header>
      <Left />
      <Body>
        <Title>{route.name}</Title>
      </Body>
      <Right />
    </Header>
  );
}
