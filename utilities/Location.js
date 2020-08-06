import RNLocation from 'react-native-location';
import Actions from './Actions';

// Set up luvio's needs for location
RNLocation.configure({
  distanceFilter: 100,
  desiredAccuracy: {
    android: 'balancedPowerAccuracy',
    ios: 'nearestTenMeters',
  },
  interval: 5000,
  showsBackgroundLocationIndicator: true,
});

// Handle locations
function updateLocation(location) {
  Actions.updateLocation(location);
}

export async function configLocationService() {
  // Check if we already have permissions
  let hasPermission = await RNLocation.checkPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
    },
  });

  // If not, request them
  if (!hasPermission) {
    hasPermission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });
  }

  // If we hvae permissions, subscribe to updates and store them via Redux
  if (hasPermission) {
    RNLocation.subscribeToLocationUpdates(updateLocation);
  }
}

export default {};
