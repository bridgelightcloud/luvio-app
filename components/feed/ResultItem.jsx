import React from 'react';
import { useLinkProps } from '@react-navigation/native';
import {
  Row, Col, Text, Center,
} from '../../styled/components';
import Thumnail from '../Thumnail';

export default function ResultItem({ result }) {
  const viewUrl = `/${result.model.toLowerCase()}s/view?id=${result._id}`;
  const { onPress, ...props } = useLinkProps({
    to: viewUrl,
  });

  return (
    <Row px={10} py={5} onTouchEnd={onPress} {...props}>
      <Col>
        <Thumnail
          model={result.model}
          picUrl={result.picUrl}
        />
      </Col>
      <Col flex={4}>
        <Center>
          <Text Light>
            {result.name}
          </Text>
        </Center>
      </Col>
    </Row>
  );
}
