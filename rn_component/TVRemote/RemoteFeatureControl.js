import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


import {RemoteButton} from './RemoteButton';

const style = StyleSheet.create({
    Container : {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'stretch'
    },
    Container_2nd : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    },
    buttons : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});

class RemoteFeatureControl extends React.Component {
    render () {
        return(
        <View style={style.Container}>
            <View style={style.Container_2nd}>
                <RemoteButton keyname='VOL_MUTE' />
             </View>
            <View style={style.Container_2nd}>
                <View style={style.buttons}>
                    <RemoteButton keyname='VOL_UP' size={50}/>
                </View>
                <View style={style.buttons}>
                    <Text>VOL</Text>
                </View>
                <View style={style.buttons}>
                    <RemoteButton keyname='VOL_DOWN' size={50}/>
               </View>
             </View>
            <View style={style.Container_2nd}>
                <View style={style.buttons}>
                    <RemoteButton keyname='SOOURCE' />
                </View>
                <View style={style.buttons}>
                    <RemoteButton keyname='MORE' />
                </View>

             </View>
            <View style={style.Container_2nd}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <RemoteButton keyname='CH_UP' size={50} />
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text>CH</Text>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <RemoteButton keyname='CH_DOWN' size={50} />

                </View>

             </View>
            <View style={style.Container_2nd}>
                <RemoteButton keyname='GUIDE' />
            </View>

        </View>
        );
    }
}

export default RemoteFeatureControl;