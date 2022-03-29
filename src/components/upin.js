import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";

//upin
export default class upin extends React.Component{

  
  constructor(){
    super()
    this.state={
      upinv: '',
      show: false,
    }
  }
  
  changeupin(upinv){
  this.setState({upinv})
  }
  
  
  validado(){
  if(this.state.upinv.length==6){
    this.props.navigation.navigate('inbox')
            //inicio sesion corrctamente lo dirige al inbox
  }else{
    this.setState({show:true})
  }
  }

  hidden(){
    this.setState({show:false})
  }



  render(){
  return (
    <View>
      
        <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Ingresa tu contraseña / uPIN</Text>
         <Image style={styles.logo2} source={logo}/>
         <Text style={styles.upin}>Ingresa tu contraseña / uPIN:</Text>

         <TextInput style={styles.input} 
         placeholder="Ingresa los 6 caracteres"
         maxLength={6}
         keyboardType="numeric"
         password={true}
         secureTextEntry={true}
         onChangeText={(upinv)=>this.changeupin(upinv)}
         value={this.state.upinv}
         />

        <Text onPress={() => this.props.navigation.navigate('consultarUpin')}
        style={styles.forgetUpin}>¿Olvidaste tu uPIN?</Text>
        
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "INICIAR SESION"
        type="clear"
        onPress={() => 
          this.validado()}
        />
        </View>

        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>UPIN Incorrecto</Text>
              <Text style={styles.modaltext2}>Recuerda que tu uPIN contiene 6 caracteres. 
              Si lo olvidaste puedes consultar en:</Text>
              <Text onPress={() => this.props.navigation.navigate('consultarUpin')}
              style={styles.forgetUpin}>¿Olvidaste tu uPIN?</Text>

  

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
     marginLeft: 'auto',
     marginRight: 'auto',
    },
    logo: {
     width: 150,
     height: 150,
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginBottom: 20
    },
    logo2: {
        width: 250,
        height: 150,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: 20,
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
     borderWidth: 1,
    },
    forgetUpin: {
     color: "blue",
     marginTop:30,
     marginLeft: 'auto',
     marginRight: 'auto',
     textDecorationLine: 'underline'
   },
   btn: {
     marginTop: 20,
     marginBottom:30,
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
  modaltext: {
    fontSize:15,
    fontWeight: 'bold'
    
  },
  modaltext2: {
    fontSize:10,
    
  },
 
 });
 