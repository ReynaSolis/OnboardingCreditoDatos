import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";
import mexico from "../../../assets/img/mexico.png";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//telefono
export default class Telefono extends React.Component{

  constructor(){
    super()
    this.state={
      telv: '',
      show: false,
    }
  }
  //cambia input
  changetel(telv){
  this.setState({telv})
  }
  
  //validacion
  validado(){
  if(this.state.telv.length==10){
    let num = this.state.telv.replace(".", '');
    if(isNaN(num)){
      //no es un numero
     this.setState({show:true})
    }else{
      this.props.navigation.navigate('ValidarTelefono')}
  }else{
    this.setState({show:true})
  }
  }
//oculta modal
  hidden(){
    this.setState({show:false})
  }
  render(){
  return (
    <KeyboardAwareScrollView>
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
         onChangeText={(telv)=>this.changetel(telv)}
         value={this.state.telv}
         />
        </View>
      
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "OBTENER CODIGO"
        type="clear"
        onPress={() => this.validado()} 
        />
        </View>


        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext2}>Introduce un numero de celular valido.</Text>
            
              <View style={styles.btn}>
              <Button
               theme={{ colors: { primary: '#000000' } }}
               title= "ENTENDIDO"
               type="clear"
              onPress={() => this.hidden()} 
               />
               </View>
            </View>
            </View>

        </Modal>

         </View>
         </KeyboardAwareScrollView>

         
     
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
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
   },
   movil: {
    color: "black",
    marginLeft:15,
   },
   container: {
    marginBottom: 20,
    marginTop: 30,
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
   },
   bandera: {
    width: 50,
    height: 40,
    display: 'flex',
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
        //modal
        modalcontainer: {
          flex:1,
          alignItems:'center',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          alignContent: 'center',
          
        },
        modaltextcontainer: {
          alignItems: 'center',
          backgroundColor:'white',
          borderWidth:3,
          margin:30,
          padding:20,
          
        },
        modaltext2: {
          fontSize:10,
          fontWeight:'bold',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          
        },

});
