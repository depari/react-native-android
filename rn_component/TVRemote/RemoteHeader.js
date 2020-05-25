import React, { Component } from 'react';
import { StyleSheet, View, Text, BackHadnler } from 'react-native';
import RnEventMediator from '../RnEventMediator'

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const style = StyleSheet.create({
    Container : {
        flex :1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    IconButton : {
        margin:0,
        padding: 0,
        backgroundColor: 'white'
    },
    Icon : {
        padding:0, marginRight:0, marginTop:0, marginLeft:0, marginBottom:0
    }
});



class RemoteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.navigation.goBack(null);
    }
    render () {

        return(
            <View style={style.Container}>
                <IconFontAwesome5.Button name="chevron-left" size={30} color="#111" style={style.IconButton} iconStyle={style.Icon}
                    onPress={ () => console.log("back!!!") }
                 />
            </View>
        );
    }
}


export default RemoteHeader;