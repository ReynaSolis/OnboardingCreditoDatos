import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";
import { validaCodigoTelefono } from '../../api/validaCodigoTelefono';
//validacion telefono
export default class ValidarTelefono extends React.Component{
  constructor(){
    super()
    this.state={
      telva: '',
      show: false,
    }
  }
  hidden(){
    this.setState({show:false})
  }
  
  changetelva(telva){
  this.setState({telva})
  }
  
  
async validado(){
  if(this.state.telva.length==4){
    const objModel={telefono:this.props.route.params.telefono,curp:this.props.route.params.curp};
    console.log(objModel);
    const obj={codigo:this.state.telva, numero:objModel.telefono,curp:objModel.curp }
    const valCode= await validaCodigoTelefono(obj);
    console.log(obj);
    console.log(valCode);
    if(valCode.respuesta==="000"){
        this.props.navigation.navigate('GeneraUpin',objModel)
    }
  }else{
    this.setState({show:true})
    Alert.alert('Codigo de validacion incorrecto', 
    'Revisa tus SMS para ingresa correctamente el codigo. De no haber recibido el codigo favor de seleccionar "ENVIARMELO DE NUEVO". ', 
    [{text: 'ENTENDIDO', onPress: ()=> console.log('alert closed')}])
  }
  }
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
         onChangeText={(telva)=>this.changetelva(telva)}
         value={this.state.telva}
         
         />

      
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "VALIDAR CELULAR"
        type="clear"
        onPress={() => 
          this.validado()
        } 
        />

        </View>

        <Text style={styles.advertencia}>Tu codigo expira en 60 segundos</Text>
        <Text style={styles.advertencia}>Este proceso puede durar algunos minutos. Si no lo recibes haz click aqui para reenviar.</Text>

        <Text onPress={() => this.props.navigation.navigate('Telefono')}
        style={styles.reenviar}>ENVIARMELO DE NUEVO</Text>

<Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Codigo de validacion incorrecto</Text>
              <Text style={styles.modaltext2}>Revisa tus SMS para ingresa correctamente el codigo. 
              De no haber recibido el codigo favor de seleccionar "ENVIARMELO DE NUEVO".</Text>

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
    display: 'flex',
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
  modaltext: {
    fontSize:15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  modaltext2: {
    fontSize:10,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },


});
