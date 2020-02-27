import React, {Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Splash extends Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text  style={styles.title}>this is SplashScreen</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
     
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})