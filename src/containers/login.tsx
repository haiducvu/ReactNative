import React, {Component  } from 'react';
import {View,Text,StyleSheet,Image,TextInput,Keyboard,Button,Alert,TouchableWithoutFeedback} from 'react-native';


    export default class Login extends Component{
        render(){
            return(
               
                    <View style={styles.rootView}>
                       <View style ={styles.rootView_1}>
                            <Image style={styles.logo}
                            source={require('../assets/ic_logo.png')}>                    
                            </Image>
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
                                onPress={() => Alert.alert('Button pressed')}
                                />
                                
                            </View>

                            <View style={styles.inputView_4}>
                                <Button style={styles.buttonView}
                                 title="Register"
                                color="#21a628"
                                 onPress={() => Alert.alert('Register pressed')}
                                 />
                            </View>

                            
                       </View>
                    </View>
                    
            );
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


