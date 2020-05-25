
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';

import {PowerButton, RemoteButton} from './RemoteButton';


const style = StyleSheet.create({
    Container : {
        flex :1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'
    }
});

class RemoteTopControl extends React.Component {
    render () {

        return(

        <View style={style.Container}>
           <RemoteButton keyname='POWER' size={40} color="#911" />
        </View>

        );
    }
}

export default RemoteTopControl;