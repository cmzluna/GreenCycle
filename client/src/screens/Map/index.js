import React, {useEffect, useRef, useState} from 'react';
import MapComponent from 'components/Map';
import {IS_ANDROID} from 'utils';
import {PermissionsAndroid} from 'react-native';
import BottomSheet from 'components/BottomSheet';

// node_modules FIXED  https://github.com/maplibre/maplibre-gl-native/issues/283

const Map = ({navigation}) => {
  const mapRef = useRef(null);
  const [permission, setPermission] = useState({
    isFetchingAndroidPermission: IS_ANDROID,
    isAndroidPermissionGranted: false,
  });

  console.log('navigation en screen map', navigation);

  const checkLocationPermission = async () => {
    try {
      const isGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      console.log('isGranted', isGranted);
      return setPermission({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const permissionType = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      return setPermission({
        isAndroidPermissionGranted: permissionType === 'granted',
        isFetchingAndroidPermission: false,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(() => {
    checkLocationPermission();
  }, []);

  if (IS_ANDROID && !permission.isAndroidPermissionGranted) {
    if (permission.isFetchingAndroidPermission) null;

    return (
      <BottomSheet requestLocationPermission={requestLocationPermission}>
        <MapComponent />
      </BottomSheet>
    );
  }
  if (IS_ANDROID && permission.isAndroidPermissionGranted)
    return (
      <>
        <MapComponent handleToggleDrawer={handleToggleDrawer} />
      </>
    );
};

export default Map;
