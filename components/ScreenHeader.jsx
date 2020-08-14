import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  Text, Header, Row, Col, Center,
} from '../styled/components';
import { colors } from '../styled/components/variables';

export default function ScreenHeader({ title }) {
  const navigation = useNavigation();

  const backButton = navigation.canGoBack()
    ? <FontAwesomeIcon icon={['fas', 'chevron-left']} color={colors.brandDark} size={20} />
    : null;

  return (
    <Header>
      <Row>
        <Col flex={1} onPress={navigation.goBack}>
          <Center>
            {backButton}
          </Center>
        </Col>
        <Col flex={4}>
          <Center horizontal>
            <Text Dark fontSize={1.2}>{title}</Text>
          </Center>
        </Col>
        <Col flex={1}>
          <Center>
            <FontAwesomeIcon icon={['fas', 'bars']} color={colors.brandDark} size={20} />
          </Center>
        </Col>
      </Row>
    </Header>
  );
}
