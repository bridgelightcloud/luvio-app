import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ScreenBase, Row, Col, Center, Text,
} from '../styled/components';
import Thumnail from '../components/Thumnail';
import util from '../utilities';

function EventViewScreenComponent({ navigation, route, session }) {
  const [eventId, setEventId] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);

  const { params } = route;

  async function getEvent() {
    const event = await util.Models.Event.lookup(eventId);
    if (event.success) {
      setEventDetails(event.data);
    }
  }

  useEffect(() => {
    if (params && params.id) {
      setEventId(params.id);
    }
  }, [params && params.id]);

  useEffect(() => {
    getEvent();
  }, [eventId]);

  if (!eventDetails) {
    return (
      <ScreenBase />
    );
  }

  return (
    <ScreenBase>
      <Row>
        <Col>
          <Center>
            <Thumnail
              model="EVENT"
              picUrl=""
            />
          </Center>
        </Col>
        <Col flex={3}>
          <Center>
            <Text>{eventDetails.name}</Text>
          </Center>
        </Col>
      </Row>
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
  };
}

const EventViewScreen = connect(mapStateToProps)(EventViewScreenComponent);
export default EventViewScreen;
