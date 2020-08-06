import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  console.log('here');
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 26.9739828,
        longitude: 75.7720324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
