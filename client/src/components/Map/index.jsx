import React, {useState} from 'react';
import {Container} from './styles';
import {Image, StyleSheet} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import {View} from 'react-native';
import {STADIA_API_KEY} from '@env';

const styleUrl = `https://tiles.stadiamaps.com/styles/osm_bright.json?api_key=${STADIA_API_KEY}`;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

const Map = () => {
  const [userLocation, setUserLocation] = useState({
    timestamp: 0,
    latitude: 0.0,
    longitude: 0.0,
    altitude: 0.0,
    heading: 0.0,
    accuracy: 0.0,
    speed: 0.0,
  });

  const onUserLocationUpdate = location => {
    console.log('location ===> ', location);
    setUserLocation({
      timestamp: location.timestamp,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      altitude: location.coords.altitude,
      heading: location.coords.heading,
      accuracy: location.coords.accuracy,
      speed: location.coords.speed,
    });
  };

  return (
    <View style={{flex: 1}}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        styleURL={styleUrl}>
        <MapLibreGL.UserLocation
          visible={true}
          onUpdate={onUserLocationUpdate}
        />
        <MapLibreGL.Camera
          defaultSettings={{
            zoomLevel: 16,
          }}
          followUserMode={'normal'}
          followUserLocation
        />

        <MapLibreGL.MarkerView
          coordinate={[-0.124589, 51.500741]}
          children={
            <Image
              source={require('/assets/GreenMapMarker.png')}
              style={{width: 35, height: 55}}
            />
          }
          anchor={{x: 0, y: 0.5}}
        />
        <MapLibreGL.ShapeSource
          id="marker-source"
          shape={{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [2.294694, 48.858093],
            },
          }}>
          <MapLibreGL.SymbolLayer
            id="marker-layer"
            style={{
              iconImage:
                'https://www.jawg.io/docs/images/icons/eiffel-tower.png',
              iconSize: 0.5,
            }}
          />
        </MapLibreGL.ShapeSource>
      </MapLibreGL.MapView>
    </View>
  );
};

export default Map;
