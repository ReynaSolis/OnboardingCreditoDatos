import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";
import mexico from "../../../assets/img/mexico.png";

//telefono
export default class telefono extends React.Component{
  render(){
  return (
        <View>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Validar numero telefonico</Text>
         <Text style={styles.title}>A continuacion recibiras un SMS con un codigo de validacion.</Text>
         <Text style={styles.movil}>Numero movil:</Text>

        <View style={styles.container}>
        <Image style={styles.bandera} source={mexico}/>
        <Text style={styles.pais}>+52</Text>
         <TextInput style={styles.input} 
         placeholder="10 digitos"
         maxLength={10}
         keyboardType="numeric"
         />
        </View>
      
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "OBTENER CODIGO"
        type="clear"
        onPress={() => this.props.navigation.navigate('validarTelefono')
        } 
        />
        </View>

         </View>

         
     
  );
}
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
   movil: {
    color: "black",
    marginLeft:15,
   },
   container: {
    marginBottom: 10,
    marginTop:10,
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
   },
   bandera: {
    width: 50,
    height: 40,
    display: 'block',
   },
   pais: {
    fontWeight:'bold',
    marginLeft: 10,
    marginRight: 10,

   },
   input: {
    height:40,
    width:250, 
    borderWidth: 1,
   },
  btn: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth:1,
    borderRadius:20,
    
  },

});
