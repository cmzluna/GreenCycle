import React, {useRef} from 'react';
import {StyleSheet, Image} from 'react-native';
import {STADIA_API_KEY} from '@env';
import MapLibreGL from '@maplibre/maplibre-react-native';
import {View} from 'react-native';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

const styleUrl = `https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${STADIA_API_KEY}`;
console.log('styleUrl -> ', styleUrl);

// node_modules FIXED  https://github.com/maplibre/maplibre-gl-native/issues/283
const Map = () => {
  const mapRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        styleURL={styleUrl}>
        <MapLibreGL.Camera
          defaultSettings={{
            centerCoordinate: [2.3210938, 48.8565913],
            zoomLevel: 5,
          }}
        />

        <MapLibreGL.MarkerView
          coordinate={[-0.124589, 51.500741]}
          children={
            <Image
              source={{
                uri: 'https://www.jawg.io/docs/images/icons/big-ben.png',
              }}
              style={{width: 25, height: 25}}
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
