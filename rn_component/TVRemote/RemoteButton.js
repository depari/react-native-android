import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RnEventMediator from '../RnEventMediator'

const style = StyleSheet.create({
    Container : {
        flex :1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'
    },
    IconButton : {
        margin:0,
        padding: 0
    },
    Icon : {
        padding:0, marginRight:0, marginTop:0, marginLeft:0, marginBottom:0
    }
});


let tvRemoteFactories = {};
tvRemoteFactories['POWER'] = class PowerButton {
};

class TVRemoteFactory {
    constructor(type, props) {
        return new tvRemoteFactories[type](props);
    }
}

export class RemoteButton extends React.Component {

    constructor(props) {
        super(props);
         const creationMap =
        {
            'POWER':
            {
                keycode : 'KEYCODE_POWER', icon_class : IconFoundation , icon_name : 'power' , icon_color :'#911'
            },
            'BACK':
            {
                keycode : 'KEYCODE_BACK', icon_class : IconIonic , icon_name : 'md-arrow-back' , icon_color :'#111'
            },
            'HOME':
            {
                keycode : 'KEYCODE_HOME', icon_class : IconFoundation , icon_name : 'home' , icon_color :'#111'
            },
            'MENU':
            {
                keycode : 'KEYCODE_MENU', icon_class : IconIonic , icon_name : 'md-menu' , icon_color :'#111'
            },
            'VOL_MUTE':
            {
                keycode : 'KEYCODE_MUTE', icon_class : IconFontAwesome5 , icon_name : 'volume-off' , icon_color :'#111'
            },

            'VOL_UP':
            {
                keycode : 'KEYCODE_VOL_UP', icon_class : IconAntDesign , icon_name : 'pluscircleo' , icon_color :'#111'
            },
            'VOL_DOWN':
            {
                keycode : 'KEYCODE_VOL_DOWN', icon_class : IconAntDesign , icon_name : 'minuscircleo' , icon_color :'#111'
            },
            'SOOURCE':
            {
                keycode : 'KEYCODE_SOURCE', icon_class : IconMaterialIcons , icon_name : 'input' , icon_color :'#111'
            },
            'MORE':
            {
                keycode : 'KEYCODE_MORE', icon_class : IconIonic , icon_name : 'ios-more' , icon_color :'#111'
            },
            'CH_UP':
            {
                keycode : 'KEYCODE_CH_UP', icon_class : IconAntDesign , icon_name : 'upcircleo' , icon_color :'#111'
            },
            'CH_DOWN':
            {
                keycode : 'KEYCODE_VOL_UP', icon_class : IconAntDesign , icon_name : 'downcircleo' , icon_color :'#111'
            },
            'GUIDE':
            {
                keycode : 'KEYCODE_GUIDE', icon_class : IconMaterialCommunityIcons , icon_name : 'television-guide' , icon_color :'#111'
            },
            'NAV_LEFT':
            {
                keycode : 'KEYCODE_LEFT', icon_class : IconFontAwesome5 , icon_name : 'caret-left' , icon_color :'#111'
            },
            'NAV_RIGHT':
            {
                keycode : 'KEYCODE_RIGHT', icon_class : IconFontAwesome5 , icon_name : 'caret-right' , icon_color :'#111'
            },

            'NAV_UP':
            {
                keycode : 'KEYCODE_UP', icon_class : IconFontAwesome5 , icon_name : 'caret-up' , icon_color :'#111'
            },
            'NAV_DOWN':
            {
                keycode : 'KEYCODE_DOWN', icon_class : IconFontAwesome5 , icon_name : 'caret-down' , icon_color :'#111'
            }

        };
        this.fontClass = creationMap[this.props.keyname];
    }
    render() {
        _color = (typeof this.props.color != 'undefined') ? this.props.color : this.fontClass.icon_color;
        _size  =  (typeof this.props.size != 'undefined') ? this.props.size : 30;
        _bgColor = (typeof this.props.bgcolor != 'undefined') ? this.props.bgcolor : "#ffffff";

        return (
            <View>
                <this.fontClass.icon_class.Button
                                style={style.IconButton}
                                name={this.fontClass.icon_name}
                                size= {_size}
                                backgroundColor={_bgColor}
                                iconStyle={style.Icon}
                                color= {_color}
                                onPress={ () => RnEventMediator.toast(this.fontClass.keycode) } />
            </View>

        );
    }

}

