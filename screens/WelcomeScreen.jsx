import React from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text, View } from 'native-base';
import Util from '../utilities';
import BlockButton from '../components/BlockButton';

const { setUser } = Util;

function WelcomeScreen({ navigation, user }){
  return(
    <Content padder>
      <View>
        <Text>{`Welcome, ${user}`}</Text>
        <BlockButton
          onPress={()=>{
            setUser(null);
          }}
        >
          <Text>Log Out...</Text>
        </BlockButton>
      </View>
    </Content>
  );
}

function mapStateToProps(store){
  return {
    user: store.userState,
  };
}

export default connect(mapStateToProps)(WelcomeScreen);