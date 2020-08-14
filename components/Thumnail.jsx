import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image } from 'react-native-svg';
import { AccountThumnail, EventThumnail, Center } from '../styled/components';
import { colors } from '../styled/components/variables';

export default function Thumnail({ model, picUrl }) {
  const icons = {
    ACCOUNT: 'user',
    EVENT: 'calendar-day',
  };
  let picture = null;
  let thumnail = null;

  if (picUrl) {
    picture = <Image />;
  } else {
    picture = (
      <FontAwesomeIcon
        icon={['fas', icons[model]]}
        color={colors.brandDark}
        size={22}
      />
    );
  }

  switch (model) {
    case 'ACCOUNT':
      thumnail = (
        <AccountThumnail>
          <Center>
            {picture}
          </Center>
        </AccountThumnail>
      );
      break;
    case 'EVENT':
      thumnail = (
        <EventThumnail>
          <Center>
            {picture}
          </Center>
        </EventThumnail>
      );
      break;
    default:
      console.warn('Unexpected Model:', model);
  }

  return thumnail;
}
