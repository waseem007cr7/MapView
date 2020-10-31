/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class App extends Component {
  render() {
    return (
      <View style={styles.containner}>
        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Map') }}
>
          <Text>Go to Map</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button:
  {
    backgroundColor: '#5499C7',
        width: wp('65%'),
        height: hp('6.5%'),
        borderRadius: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%')
  }
});

export default App;
