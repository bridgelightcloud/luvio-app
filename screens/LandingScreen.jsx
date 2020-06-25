import React from 'react';
import { connect } from 'react-redux';
import { Content, Card, Button, Text, View } from 'native-base';
import store from '../store/store';

function LandingScreen(props){
  const { navigation, route, user, test } = props;

  function setUser(user){
    return {
      type: 'SET_USER',
      user
    }
  }

  function boundSetUser(user){
    store.dispatch(setUser(user));
  }

  const contents = user
    ? (
      <View>
        <Text>{`Welcome, ${user}`}</Text>
        <Button
          onPress={()=>{
            boundSetUser(null);
          }}
        >
          <Text>Log Out...</Text>
        </Button>
      </View>
    )
    : (
      <View>
        <Button
          onPress={()=>{
            boundSetUser("Seanny");
          }}>
          <Text>Log In...</Text>
        </Button>
        <Button
          onPress={()=>navigation.navigate("SignUp")}
        >
          <Text>Sign Up...</Text>
        </Button>
      </View>
    );

  return(
    <Content padder>
      <Card>
        {contents}
      </Card>
    </Content>
  );
}

function mapStateToProps(store){
  return {
    user: store.userState,
    test: store.testState,
  };
}

export default connect(mapStateToProps)(LandingScreen);