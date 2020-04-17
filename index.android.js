import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>This is React-Native assembly</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#ccc',
  },
  hello: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
  },
});
//Notice the reactdemo here.
AppRegistry.registerComponent('react_native_app', () => HelloWorld);