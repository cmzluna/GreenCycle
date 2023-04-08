import React, {useEffect, useRef, useState} from 'react';
import MapComponent from 'components/Map';
import {IS_ANDROID} from 'utils';
import MapLibreGL from '@maplibre/maplibre-react-native';
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  SafeAreaView,
  Button,
  PermissionsAndroid,
} from 'react-native';
import {promiseWrapper} from '../../utils';
import BottomSheet from '../../components/BottomSheet';
import {useFocusEffect} from '@react-navigation/native';

const styles = StyleSheet.create({
  noPermissionsText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

// node_modules FIXED  https://github.com/maplibre/maplibre-gl-native/issues/283
const Map = () => {
  const mapRef = useRef(null);
  const [permission, setPermission] = useState({
    isFetchingAndroidPermission: IS_ANDROID,
    isAndroidPermissionGranted: false,
  });

  const checkLocationPermission = async () => {
    try {
      const isGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      console.log('isGranted', isGranted);
      return setPermission({
        isAndroidPermissionGranted: isGranted === 'granted',
        isFetchingAndroidPermission: false,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLocationPermission = async () => {
    console.log('en requestLocationPermission ***');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      console.log('permission given ? ', granted);
      return setPermission({
        isAndroidPermissionGranted: granted === 'granted',
        isFetchingAndroidPermission: false,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLocationPermissionHandler = async () => {
    console.log('state en handler ? ', permission);
    const [isGranted] = await promiseWrapper(
      MapLibreGL.requestAndroidLocationPermissions(),
    );

    console.log('en requestLocationPermissionHandler isGranted? = ', isGranted);

    return setPermission({
      isAndroidPermissionGranted: isGranted,
      isFetchingAndroidPermission: false,
    });
  };

  useEffect(() => {
    // if (IS_ANDROID) {
    //   requestLocationPermissionHandler();
    //   console.log('state ? ', permission);
    // }
    // requestLocationPermission();
    // console.log('infinite loop?');
    checkLocationPermission();
  }, []);

  if (IS_ANDROID && !permission.isAndroidPermissionGranted) {
    if (permission.isFetchingAndroidPermission) {
      console.log('here');
      return null;
    }

    return (
      <BottomSheet requestLocationPermission={requestLocationPermission}>
        <MapComponent />
      </BottomSheet>
    );
  }
  if (IS_ANDROID && permission.isAndroidPermissionGranted) {
    console.log('permission?', permission.isAndroidPermissionGranted);
    return <MapComponent />;
  }
};

export default Map;
