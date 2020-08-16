import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView , {Polyline} from 'react-native-maps';

const Map = () => {
  console.log('here'); 
  let points = [];

  for(let i=0; i<20; i++) {
    points.push({
      latitude : 26.9729828 + i*.01,
      longitude : 75.7720324 + i*.01
    })
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 26.9739828,
        longitude: 75.7720324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      
    ><Polyline coordinates={points}/></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
