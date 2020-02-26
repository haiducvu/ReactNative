import React, {Component } from 'react';
import {View,Text,StyleSheet,Image,
        TouchableWithoutFeedback,StatusBar,
    TextInput,SafeAreaView,Keyboard,TouchableOpacity,Button,Alert} from 'react-native';

export default class Login extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle='ligh-content'/>
            <View style={styles.container}>
            <Image style={styles.logo}
            source={require('../container/ic_logo.png')}>                    
            </Image>  
            <Text style={styles.title}> Welcome to AirportLimo</Text> 
            <TextInput style={styles.input}
                    placeholder="Your Email"                                          
                />
                <TextInput style={styles.input}
                placeholder="Password"
                secureTexEntry={true}
                />             
        </View>
        <View >
        <Button style={styles.buttonText}
            title="Login"
            onPress={() => Alert.alert('Login')}
            />
            <Button style={styles.buttonText}
            title="Register"
            onPress={() => Alert.alert('Register')}
            />
        </View>
              
        </SafeAreaView>
           
        )
    }
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column',
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        left:130,
        top:30,
    },

    logo:{
        width:120,
        height:120,
        left:5,
        top:100,
        
    },
   input:{
       height:40,
       top:180,
       left:70,
      marginBottom:20,
      paddingHorizontal:10      
   },
   buttonText:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:15,
      backgroundColor:'gray',
   
   }
})


