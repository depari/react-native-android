import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
            <View style={styles.container}>
              <Text style={styles.hello}>Hello, World!! First App Test </Text>
            </View>
          );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

 DeviceEventEmitter.addListener('customEvent', function (e: Event) {
        // hadle the event triggered from java side
        console.log("SSEO customEvent : " + e )


    });

AppRegistry.registerComponent('react_native_app', () => HelloWorld);