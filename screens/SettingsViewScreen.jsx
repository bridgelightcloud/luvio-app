import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ScreenBase, Text,
} from '../styled/components';

function SettingsViewScreenComponent({ navigation, route, session }) {
  const [settingsId, setSettingsId] = useState(null);
  const [settingsDetails, setSettingsDetails] = useState(null);

  const { params } = route;

  async function getSettings() {
    // const settings = await models.Settings.lookup(settingsId);
    // if (settings.success) {
    //   setSettingsDetails(settings.data);
    //   console.log(settings.data);
    // }
  }

  useEffect(() => {
    if (params && params.id) {
      setSettingsId(params.id);
    } else if (session) {
      setSettingsId(session);
    } else {
      navigation.replace('auth');
    }
  }, [params && params.id]);

  useEffect(() => {
    getSettings();
  }, [settingsId]);

  if (!settingsDetails) {
    return (
      <ScreenBase />
    );
  }

  return (
    <ScreenBase>
      <Text Dark>Settings</Text>
    </ScreenBase>
  );
}

function mapStateToProps(store) {
  return {
    session: store.sessionState,
    settings: store.settingsState,
  };
}

const SettingsViewScreen = connect(mapStateToProps)(SettingsViewScreenComponent);
export default SettingsViewScreen;
