import React, {Component} from 'react';
import MapView, {Marker, Circle} from 'react-native-maps';

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
      showUserLocation: true,
      error: null,
      zones: [],
    };
  }
  render() {
    return (
      <View style={styles.containner}>
        <TouchableOpacity>
          <Text>Go to Map</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Map;
const styles = StyleSheet.create({
  containner: {
    flex: 1,
  },
});
