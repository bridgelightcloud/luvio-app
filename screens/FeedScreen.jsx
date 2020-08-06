import React from 'react';
import {
  ScreenBase, Row, Center, Text,
} from '../styled/components';

function FeedScreen() {
  return (
    <ScreenBase>
      <Row flex={0}>
        <Center>
          <Text>Item 1</Text>
        </Center>
      </Row>
      <Row flex={0}>
        <Text Error>Item 2</Text>
      </Row>
    </ScreenBase>
  );
}

export default FeedScreen;
