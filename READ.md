
  <<backup file login.tsx>
  import React, { Component } from 'react'
import { Text, View, Button,     Image,TextInput,StyleSheet } from 'react-native'

export default class Login extends Component<any> {

  movetoHome = () => this.props.navigation.navigate('Home');
  render() {
    return (
      <View style={styles.rootView}>
      <View style ={styles.rootView_1}>
          
           <Text style={styles.headerText}>Welcome to AirportLimo</Text>
      </View>      
      <View style ={styles.rootView_2}>
      
            <View style={styles.inputView_1}>
                <TextInput                               
                     placeholder='Your Email'                                                                   
                />                                                             
            </View>
            <View style={styles.inputView_2}>
            <TextInput                               
                 placeholder='Password'                                                                   
            />                                                             
           </View>
          
      </View>
      

      <View style ={styles.rootView_3}>

           <View style={styles.inputView_5}>
               <Text style={styles.forgotPassword}>
                   Forgot Password?
               </Text>                                                           
           </View>

           <View style={styles.inputView_3}>

               <Button style={styles.buttonView}
               title="Login"
               color="#0097fc"
               onPress= {this.movetoHome}
               //onPress={() => Alert.alert('Button pressed')}
               />
               
           </View>

           <View style={styles.inputView_4}>
               <Button style={styles.buttonView}
                title="Register"
               color="#21a628"
                //onPress={() => Alert.alert('Register pressed')}
                />
           </View>

           
      </View>
   </View>
    )
  }
}
const styles =StyleSheet.create({
  rootView: {
    flex: 1,
    padding: 50,
    //backgroundColor: 'skyblue',
    },
  rootView_1:{
     flex:2,
     //backgroundColor: 'blue',
     flexDirection:'row',
    },

    rootView_2:{
      flex:4,
      //backgroundColor: 'red',
     },  

     rootView_3:{
      flex:4,
      //backgroundColor: 'green',
     },

     logo:{
      width:120,
      height:120, 
                
     },
     headerText: {
      textAlign: 'center',
      color: '#000',
      fontSize: 12,
      marginTop:40,
    },

    inputView_1: {
      
       borderWidth: 1, 
       borderRadius: 10,
       borderColor: '#000000',
       width: '100%',
       height:55,
       marginTop:60,       
       backgroundColor: '#ffffff'
     },
     inputView_2: {
      
      borderWidth: 1, 
      borderRadius: 10,
      borderColor: '#000000',
      width: '100%',
      height:55,
      marginTop:30,       
      backgroundColor: '#ffffff'
    },

    inputView_3: {      
      width: '60%',
      height:55,
      marginTop:10,
      marginLeft:50,
      
    },

    inputView_4: {
      
      
      width: '60%',
      height:55,
      marginLeft:50,
      marginTop:40,
    },

    inputView_5: {
      width: '90%',
      height:40,
      marginTop:70,
      marginLeft:50,
    },

    forgotPassword: {
      textAlign:'right',
      textDecorationLine:'underline',
      color:"#0097fc",    
    },    
})
  
  
        <!-- backup file App.js -->

<!-- /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App; -->
