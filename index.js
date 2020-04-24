import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';

import { Alert } from 'react-native';




class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayText: "none"};
        // this.updateText = this.updateText().bind(this);
         DeviceEventEmitter.addListener('customEvent', this.updateTest);
    }
    updateTest = (event) => {

      //alert("event");
      this.setState(
          {displayText: event}
      );
    }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World!! First App </Text>
        <Text style={styles.hello}>Event </Text>
        <Text > {this.state.displayText}</Text>
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

// DeviceEventEmitter.addListener('customEvent', function (e: Event) {
//        // hadle the event triggered from java side
//        console.log("SSEO customEvent !!!!! : " + e )
//        alert("customEvent:", + e);
//        var _messge = "customeEvent" + e;
//
//    });



//class EventDisplay extends React.Component {
////    constructor(props) {
////        super(props);
////        this.state = {displayText: "none"};
////        // this.updateText = this.updateText().bind(this);
////    }
//
//    render() {
////        return (
////          <Text > {this.state.displayText}</Text>
////        );
//        return (
//          <Text > test </Text>
//        );
//    }
//}

AppRegistry.registerComponent('react_native_app', () => HelloWorld);