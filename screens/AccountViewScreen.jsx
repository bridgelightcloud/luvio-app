import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ScreenBase, Col, Row, Text, Center,
} from '../styled/components';
import util from '../utilities';
import Thumnail from '../components/Thumnail';
import ScreenHeader from '../components/ScreenHeader';

function AccountViewScreenComponent({ navigation, route, session }) {
  const [accountId, setAccountId] = useState(null);
  const [accountDetails, setAccountDetails] = useState(null);

  const { params } = route;

  async function getAccount() {
    if (accountId) {
      const account = await util.Models.Account.lookup(accountId);
      if (account.success) {
        setAccountDetails(account.data);
      }
    }
  }

  useEffect(() => {
    if (params && params.id) {
      setAccountId(params.id);
    } else if (session) {
      setAccountDetails(session.account);
    } else {
      navigation.replace('auth');
    }
  }, [params && params.id, session]);

  useEffect(() => {
    getAccount();
  }, [accountId]);

  if (!accountDetails) {
    return <ScreenBase />;
  }

  return (
    <ScreenBase>
      <ScreenHeader name={accountDetails.name} />
      <Row>
        <Col>
          <Center>
            <Thumnail
              model="ACCOUNT"
              picUrl={accountDetails.picUrl}
            />
          </Center>
        </Col>
        <Col flex={3}>
          <Center horizontal>
            <Text>{accountDetails.name}</Text>
          </Center>
        </Col>
      </Row>
      <Row flex={5} />
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

const AccountViewScreen = connect(mapStateToProps)(AccountViewScreenComponent);
export default AccountViewScreen;
