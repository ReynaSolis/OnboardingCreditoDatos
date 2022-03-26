import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";

//curp
export default class login extends React.Component {

  constructor(){
  super()
  this.state={
    curpv: '',
  }
}

changecurp(curpv){
this.setState({curpv})
}


validado(){
if(this.state.curpv.length==18){
  this.props.navigation.navigate('upin')
}else{
  Alert.alert('CURP Incorrecto', 'Recuerda que tu CURP tiene 18 caracteres. Si lo olvidaste puedes consultar en ¿Olvidaste tu CURP?', [{text: 'ENTENDIDO', onPress: ()=> console.log('alert closed')}])
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

        <Text onPress={() => this.props.navigation.navigate('registro') }
        style={styles.curpgob}>¡Registrate!</Text>
        
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "Entendido"
        type="clear"
        onPress={() => this.validado() } 
        />
        </View>
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

});
