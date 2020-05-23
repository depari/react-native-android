import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
//import Icon from 'react-native-vector-icons/AntDesign';
//import {Icon as IconAntDesign} from 'react-native-vector-icons/AntDesign';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//MaterialIcons

//import Foundation.Icon from 'react-native-vector-icons/'



class RemoteButton extends React.Component {




    render() {
        const remoteMap = [
                    { keyname : 'POWER', keycode : 'KEYCODE_', icon_group : IconIonic , icon_name : 'md-power' , icon_color :'#911' }
                    ,{ keyname : 'UP', keycode : 'KEYCODE_', icon_group : IconIonic, icon_name : 'up' , icon_color :'#111' }




//            { keyname : 'POWER',
//              data : {
//                keycode : 'KEYCODE_', icon_group : IconIonic , icon_name : 'md-power' , icon_color :'#911' },
//              }
//             }
//            { keyname : 'UP', keycode : 'KEYCODE_',icon_name : 'up' , icon_color :'#111' },
//            { keyname : 'DOWN', keycode : "KEYCODE_", icon_name : 'down' , icon_color :'' },
//            { keyname : 'LEFT', keycode : "KEYCODE_", icon_name : 'left' , icon_color :'#111' },
//            { keyname : 'RIGHT', keycode : "KEYCODE_", icon_name : 'right' , icon_color :'#111' },
//            { keyname : 'SELECT', keycode : "KEYCODE_", icon_name : 'enter' , icon_color :'' },
//            { keyname : 'RETURN', keycode : "KEYCODE_", icon_name : 'back' , icon_color :'#111' },
//            { keyname : 'VOL_UP', keycode : "KEYCODE_", icon_name : 'chevron-up' , icon_color :'#111' },
//            { keyname : 'VOL_DOWN', keycode : "KEYCODE_", icon_name : 'chevron-down' , icon_color :'#111' },
//            { keyname : 'VOL_MUTE', keycode : "KEYCODE_", icon_name : 'sound-mute' , icon_color :'#111' },
//            { keyname : 'HOME', keycode : "KEYCODE_", icon_name : 'home' , icon_color :'#111' }
        ];
        return (
//              <Button title={this.props.name}  keycode={this.props.keycode} type="outline" size={3} />
            <Icon name={this.props.name} size={30} color="#111" />
//              sremoteInfo = remoteMap.find(data => data.keycode === {this.props.name});


//                <remoteInfo.icon_group  name=remoteInfo.icon_name color=remoteInfo.icon_color/>
//                <Icon2 name="enter" size={30} color="#111" />
        )
    }

}

class RemoteHeader extends React.Component {
    render () {
        return(
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
            <IconFontAwesome5 name="chevron-left" size={30} color="#111" />
        </View>



        );
    }
}

class RemoteTopControl extends React.Component {
    render () {

        return(
        <View style={{flex: 1, backgroundColor: 'white',justifyContent: 'center', alignItems:'center'}}>
           <IconFoundation name="power" size={40} color="#911" />
        </View>

        );
    }
}


class RemoteFeatureControl extends React.Component {
    render () {
        return(
        <View style={{flex: 4, flexDirection: 'row', backgroundColor: 'white', alignItems:'stretch'}}>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems:'center', justifyContent:'center'}}>
                <IconFontAwesome5 name="volume-off" size={30} color="#111" />
             </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems:'center', justifyContent:'center'}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <IconAntDesign name="pluscircleo" size={50} color="#111" />
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <Text>VOL</Text>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <IconAntDesign name="minuscircleo" size={50} color="#111" />
                </View>
             </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems:'center', justifyContent:'center'}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <IconMaterialIcons name="input" size={30} color="#111" />
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <IconIonic name="ios-more" size={30} color="#111" />
                </View>

             </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems:'center', justifyContent:'center'}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <IconAntDesign name="upcircleo" size={50} color="#111" />
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text>CH</Text>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
                    <IconAntDesign name="downcircleo" size={50} color="#111" />
                </View>

             </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white' , alignItems:'center', justifyContent:'center'}}>
                <IconMaterialCommunityIcons name="television-guide" size={30} color="#111" />
            </View>



        </View>
        );
    }
}

class RemoteMiddleControl extends React.Component {
    render () {
        return(
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <IconIonic name="md-arrow-back" size={30} color="#111" />
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <IconFoundation name="home" size={30} color="#111" />
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <IconIonic name="md-menu" size={30} color="#111" />
                </View>
            </View>
        );
    }
}





class RemoteNaviControl extends React.Component {
    render () {
        return(

        <View style={{flex: 8, flexDirection: 'row', backgroundColor: 'white'}}>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
                <IconFontAwesome5 name="caret-left" size={30} color="#111" />
             </View>
            <View style={{flex: 5, flexDirection: 'column', backgroundColor: 'white'}}>
                <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
                    <IconFontAwesome5 name="caret-up" size={30} color="#111" />
                </View>
                <View style={{flex: 5, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
                </View>
                <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
                    <IconFontAwesome5 name="caret-down" size={30} color="#111" />
                </View>
             </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
                <IconFontAwesome5 name="caret-right" size={30} color="#111" />
             </View>

        </View>


        );
    }
}




class TVRemoteControllerApp extends React.Component {
    render() {
            return (
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <RemoteHeader />
                    <RemoteTopControl />
                    <RemoteFeatureControl />
                    <RemoteMiddleControl />
                    <RemoteNaviControl />
                    <View style={{flex: 1.5, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}} />
                </View>
            );
    }
}

const styles = StyleSheet.create({
  remoteHeader: {

  },
  remoteTop: {
  },
  remoteFeature : {

  },
  remoteMiddle : {

  },
  remoteNav:  {
  }
});

export default TVRemoteControllerApp;