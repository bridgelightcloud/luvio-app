import CameraRoll from '@react-native-community/cameraroll';
import { PermissionsAndroid } from 'react-native';

const Camera = {
  async getPermission() {
    // Check if we have permissions to access photos on device
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    // If not, request permission. If the user has specified to never ask again,
    // this does nothing and returns false
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  },

  async getPhotos() {
    // Check if we have permission to get photos, and if not, ask
    // Only get photos if we *do* have permission
    if (await this.getPermission()) {
      const photos = await CameraRoll.getPhotos({
        first: 20,
      });
      console.debug(photos.edges[0].node.image.uri);
      return photos;
    }

    // Return an empty array if we don't have permission
    return [];
  },
};

export default Camera;
