import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import Navbar from './components/navbar';

export default class client extends React.Component {
  render() {
    return (
      <Navbar/>
      // <View style={styles.panel}>
      //   <View style={styles.greetingBox}>
      //     <Text style={styles.greeting}>
      //       Welcome to React 360
      //     </Text>
      //     <VrButton style={styles.button}/>
      //   </View>
      //   </View>
    );
  }
};

const styles = StyleSheet.create({
  // panel: {
  //   // Fill the entire surface
  //   width: 1000,
  //   height: 600,
  //   backgroundColor: 'rgba(255, 255, 255, 0.4)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff'
  },
});

AppRegistry.registerComponent('client', () => client);