import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';

import { TouchableOpacity, Alert, TextInput } from 'react-native';

//import EventMediatorModule from './EventMediatorModule';
import RnEventMediator from './RnEventMediator'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayText: "none",
            inputText:"nothing"
            };
        // this.updateText = this.updateText().bind(this);
         DeviceEventEmitter.addListener('customEvent', this.updateTest);
    }
    updateTest = (event) => {

      //alert("event");
      var text = "Event Triggered: [" + event + "]";
      this.setState(
          {displayText: text}
      );
    }

  render() {
//    const [value, onChangeText] = React.useState('Useless Placeholder');
//const [text, setText] = useState('');
    return (

      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World!! First App </Text>
        <Text style={styles.event_text}> {this.state.displayText}</Text>
        <Input/>
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
  event_text : {
      fontSize: 20,
      textAlign: 'left',
      margin: 10,
  },
  input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }
});

class Input extends React.Component {
    state = {
        input_text : "none"
    };

    handleText = text => {
        this.setState({ input_text: text });
        console.log("input_text:" +text );
    };

    submitText = text => {
            //this.setState({ input_text: text });
            console.log("submitText:" +text );
            RnEventMediator.toast(text);
        };



    render() {
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type Event String to Android"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleText}
            />

         <TouchableOpacity
           style = {styles.submitButton}
           onPress = {
              () => this.submitText(this.state.input_text)
           }>
           <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>

          </View>
        );
      }
}

class InputForm extends React.Component {
   state = {
        input_text : "none"

    };
    //onSubmit = data => console.log(data)

    handleSubmit = data => {
        //this.setState({ input_text: text });
        console.log("input_text:" +text );

    };

    render() {
        return (
          <form onSubmit={this.handleSubmit()}>
                <input name="Type String" ref={this.state.input_text} />

                <input type="submit" />
              </form>
        );
      }
}

export default App;