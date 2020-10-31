import React, { Component } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      showsUserLocation: true,
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },

      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    )
  }


  render() {
    return (
      <View style={styles.container}>

        {this.state.latitude && this.state.longitude &&
          <MapView style={styles.map}
            //showsUserLocation={this.state.showsUserLocation}
            showsMyLocationButton={true}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >

            <Marker
              coordinate=
              {{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}>
            </Marker>


          </MapView>}
      </View>

    );
  }
}

const styles = StyleSheet.create
  ({
    container:
    {
      flex: 1
    },

    map:
    {
      position: 'absolute',
      height: '100%',
      width: '100%'
    }
  })

export default Map