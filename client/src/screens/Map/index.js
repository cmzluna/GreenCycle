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
    activeExample: -1,
  });

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      return setPermission({
        isAndroidPermissionGranted: granted === 'granted',
        isFetchingAndroidPermission: false,
      });

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        alert('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
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
    requestLocationPermission();
    console.log('infinite loop?');
  }, []);

  if (IS_ANDROID && !permission.isAndroidPermissionGranted) {
    if (permission.isFetchingAndroidPermission) {
      console.log('here');
      return null;
    }
    return (
      <View>
        <Text style={styles.noPermissionsText}>
          You need to accept location permissions in order to use this example
          applications
          <Button
            title="aceptar permisos"
            onPress={requestLocationPermission}
          />
        </Text>
      </View>
    );
  }
  if (IS_ANDROID && permission.isAndroidPermissionGranted) {
    console.log('permission?', permission.isAndroidPermissionGranted);
    return (
      <>
        <BottomSheet>
          <MapComponent />
        </BottomSheet>
      </>
    );
  }
};

export default Map;
