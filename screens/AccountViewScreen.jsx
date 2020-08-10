import React from 'react';
import {
  ScreenBase, Col, Row, Text,
} from '../styled/components';

function AccountViewScreen({ route }) {
  const { params } = route;
  return (
    <ScreenBase>
      <Row>
        <Col>
          <Text>Image</Text>
        </Col>
        <Col flex={3}>
          <Text>Test</Text>
        </Col>
      </Row>
    </ScreenBase>
  );
}

export default AccountViewScreen;
