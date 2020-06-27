import React from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default function BlockButton(props){
  return(
    <Button
    style={style.blockButton}
      block
      rounded
      { ...props }
    >
      {props.children}
    </Button>
  )
}

const style = StyleSheet.create({
  blockButton: {
    padding: 15,
  }
})