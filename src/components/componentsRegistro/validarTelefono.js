import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";

//validacion telefono
export default class validarTelefono extends React.Component{
  render(){
  return (
        <View>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Ingresar codigo de validacion</Text>
         <Text style={styles.instruccion}>Ingresa el codigo de numeros que enviamos a tu celular via SMS.</Text>
         

         <TextInput style={styles.input} 
         placeholder="codigo 4 digitos"
         maxLength={4}
         keyboardType="numeric"
         
         />

      
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "VALIDAR CELULAR"
        type="clear"
        onPress={() => 
          this.props.navigation.navigate('generaUpin')
        } 
        />

        </View>

        <Text style={styles.advertencia}>Tu codigo expira en X segundos</Text>
        <Text style={styles.advertencia}>Este proceso puede durar algunos minutos. Si no lo recibes haz click aqui para reenviar.</Text>

        <Text onPress={() => Linking.openURL('https://www.gob.mx/curp/')}
        style={styles.reenviar}>ENVIARMELO DE NUEVO</Text>

         </View>

         
     
  );
}
}






const styles = StyleSheet.create({
   title: {
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: 'bold',
   },
   logo: {
    width: 150,
    height: 150,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
   },
   input: {
    height:40, 
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
    borderWidth: 1,
   },
  btn: {
    marginBottom:30,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderWidth:1,
    borderRadius:20,
  },
  instruccion: {
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
   },
   advertencia: {
    color: "black",
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
   },
   reenviar: {
    color: "black",
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: 'bold',
   },


});
