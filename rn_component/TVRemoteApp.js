import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import RemoteHeader from './TVRemote/RemoteHeader';
import RemoteTopControl from './TVRemote/RemoteTopControl';
import RemoteMiddleControl from './TVRemote/RemoteMiddleControl';
import RemoteFeatureControl from './TVRemote/RemoteFeatureControl';
import RemoteNaviControl from './TVRemote/RemoteNaviControl'

class TVRemoteApp extends React.Component {
    render() {
            return (
                <View style={styles.Container}>
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
  Container : {
    flex: 1, flexDirection: 'column'
  }
});

export default TVRemoteApp;