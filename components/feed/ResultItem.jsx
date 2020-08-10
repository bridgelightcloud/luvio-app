import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Row, Col, Text } from '../../styled/components';

export default function ResultItem({ result }) {
  const navigation = useNavigation();

  return (
    <Row
      onTouch={() => navigation.navigate('view', { id: result.id })}
    >
      <Col />
      <Col flex={4}>
        <Text Light>
          {result.name}
        </Text>
      </Col>
    </Row>
  );
}
