import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {RemoteButton} from './RemoteButton';

const style = StyleSheet.create({
    Container : {
        flex: 8,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    Container_2nd_Mid : {
        flex: 5,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    Container_normal_icon : {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent:'center'
         },
    nav_touch : {
        flex: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center'
    }

});


class RemoteNaviControl extends React.Component {
    render () {
        return(

        <View style={style.Container}>
            <View style={style.Container_normal_icon}>
                <RemoteButton keyname='NAV_LEFT' />
             </View>
            <View style={style.Container_2nd_Mid}>
                <View style={style.Container_normal_icon}>
                    <RemoteButton keyname='NAV_UP' />
                </View>
                <View style={style.nav_touch}>
                </View>
                <View style={style.Container_normal_icon}>
                    <RemoteButton keyname='NAV_DOWN' />
                </View>
             </View>
            <View style={style.Container_normal_icon}>
                <RemoteButton keyname='NAV_RIGHT' />
             </View>

        </View>


        );
    }
}

export default RemoteNaviControl;