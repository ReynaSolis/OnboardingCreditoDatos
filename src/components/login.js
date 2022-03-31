import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";

//curp
export default class Login extends React.Component {

  constructor(){
  super()
  this.state={
    curpv: '',
    show: false,
    registro: false,
  }
}

changecurp(curpv){
this.setState({curpv})
}


validado(){
if(this.state.curpv.length==18){
  this.props.navigation.navigate('Upin')
}else{
  this.setState({show:true})
}
}

hidden(){
  this.setState({show:false})
}

hidden2(){
  this.setState({registro:false})
}

registro(){
  if(this.state.curpv.length==18){
    this.props.navigation.navigate('Registro')
  }else{
    this.setState({registro:true})
  }
}

  
render(){

  return (
    //desde aqui es lo que vemos en pantalla:
        <View>
         <Text style={styles.title}>Bienvenida/o a tu correo personal DPR</Text>
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.curp}>Ingresa tu CURP:</Text>

         <TextInput style={styles.input} 
         placeholder="Ingresa los 18 caracteres"
         maxLength={18}
        keyboardType="default"
        onChangeText={(curpv)=>this.changecurp(curpv)}
        value={this.state.curpv}
         />

        <Text onPress={() => Linking.openURL('https://www.gob.mx/curp/')}
        style={styles.curpgob}>¿Olvidaste tu CURP?</Text>

        <Text onPress={() => this.registro() }
        style={styles.curpgob}>¡Registrate!</Text>
        
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "Entendido"
        type="clear"
        onPress={() => this.validado() } 
        />
        </View>

        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>CURP Incorrecto.</Text>
              <Text style={styles.modaltext2}>Recuerda que tu CURP tiene 18 caracteres. 
              Si lo olvidaste puedes consultar en:</Text>
              <Text onPress={() => Linking.openURL('https://www.gob.mx/curp/')}
              style={styles.curpgob}>¿Olvidaste tu CURP?</Text>
              

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

        <Modal
        transparent={true}
        visible={this.state.registro}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Introduce tu CURP para el registro.</Text>
              

              <View style={styles.btn}>
              <Button
               theme={{ colors: { primary: '#000000' } }}
               title= "ENTENDIDO"
               type="clear"
              onPress={() => this.hidden2()} 
               />
               </View>
            </View>
            </View>

        </Modal>



         </View>
     
  );
}
}





//styles
const styles = StyleSheet.create({
   title: {
    color: "black",
    marginLeft: 'auto',
    marginRight: 'auto',
   },
   logo: {
    width: 150,
    height: 150,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
   },
   curp: {
    color: "black",
    marginLeft:15,
   },
   input: {
    height:40, 
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
    borderWidth: 1,
    textTransform: 'uppercase',
   },
   curpgob: {
    color: "blue",
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    textDecorationLine: 'underline'
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
    margin:50,
    padding:40,
    
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
