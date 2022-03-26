import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";


export default class continuarUpin extends React.Component {
render(){
  return (
        <View>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Acceso con uPIN</Text>
         <Text style={styles.upin}>uPIN:</Text>

         <TextInput style={styles.input} 
         placeholder=""
         maxLength={6}
         secureTextEntry={true}
         
         
         />

      
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "CONTINUAR"
        type="clear"
        onPress={() => 
          this.props.navigation.navigate('inbox')

        } 
        />
        </View>

         </View>

         
     
  );}
}






const styles = StyleSheet.create({
   title: {
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
   },
   logo: {
    width: 150,
    height: 150,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
   },
   upin: {
    color: "black",
    marginLeft:15,
   },
   input: {
    height:40, 
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
    
   },
  btn: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth:1,
    borderRadius:20,
    
  },

});
