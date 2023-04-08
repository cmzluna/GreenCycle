import React, {useState} from 'react';
import {Container, SearchbarComp, MenuBtn, DrawerComp} from './styles';
import {StyleSheet, Image} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import {STADIA_API_KEY} from '@env';
import Drawer from '../../stacks/DrawerStack';

const styleUrl = `https://tiles.stadiamaps.com/styles/osm_bright.json?api_key=${STADIA_API_KEY}`;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

const Map = ({handleToggleDrawer}) => {
  const [userLocation, setUserLocation] = useState({
    timestamp: 0,
    latitude: 0.0,
    longitude: 0.0,
    altitude: 0.0,
    heading: 0.0,
    accuracy: 0.0,
    speed: 0.0,
  });
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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
    <>
      <Container>
        <SearchbarComp
          placeholder="Buscar centros..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon={{
            source: require('/assets/Icons/Search.png'),
            direction: 'rtl',
          }}
        />

        <MenuBtn onPress={handleToggleDrawer}>
          <Image
            source={require('/assets/Icons/HamburguerIcon.png')}
            style={{
              height: 15,
              width: 20,
            }}
          />
        </MenuBtn>
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
      </Container>
    </>
  );
};

export default Map;
