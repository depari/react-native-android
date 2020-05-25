import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {RemoteButton} from './RemoteButton';

const style = StyleSheet.create({
    Container : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    buttons : {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }

});

class RemoteMiddleControl extends React.Component {
    render () {
        return(
            <View style={style.Container}>
                <View style={style.buttons}>
                    <RemoteButton keyname='BACK' />
                </View>
                <View style={style.buttons}>
                    <RemoteButton keyname='HOME' />

                </View>
                <View style={style.buttons}>
                    <RemoteButton keyname='MENU' />
                </View>
            </View>
        );
    }
}

export default RemoteMiddleControl;