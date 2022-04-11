import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";
import { insertarUser } from '../../api/insertUser';
//crear upin
export default class CrearUpin extends React.Component{
  constructor(props){
    super(props)
    this.state={
      upinew1: '',
      upinew2: '',
      show: false,
    }
  }
  hidden(){
    this.setState({show:false})
  }
  
  changeupinew1(upinew1){
    this.setState({upinew1})
    }
  changeupinew2(upinew2){
  this.setState({upinew2})
  }
  
  
 async  validado(){
  if(this.state.upinew1.length==6 && this.state.upinew2.length==6 &&
    this.state.upinew1 === this.state.upinew2){
      const objM={telefono:this.props.route.params.telefono,curp:this.props.route.params.curp};
      const objInt= {curp: objM.curp,telefono: objM.telefono, upin: this.state.upinew1}
      console.log(objM);
      console.log(objInt);
      const resgistrar=await insertarUser(objInt);
      if(resgistrar.codigo==="000"){
        this.props.navigation.navigate('ContinuarUpin', objInt)
      }else{

        console.log("Algo falló");
      }

    
    
  }else{
    this.setState({show:true})
  }
  }

  
  
  
  

  render(){
    
  return (
        <View>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Crear uPIN</Text>
         <Text style={styles.instruccion}>Establece tu uPIN de 6 numeros y confirmalo.</Text>

         <Text style={styles.instruccion}>uPIN</Text>

         <TextInput style={styles.input} 
         placeholder="uPIN 6 digitos"
         maxLength={6}
         secureTextEntry={true}
         keyboardType="numeric"
         password={true}
         onChangeText={(upinew1)=>this.changeupinew1(upinew1)}
         value={this.state.upinew1}
         
         
         />

        <Text style={styles.instruccion}>Confirmar uPIN:</Text>

        <TextInput style={styles.input} 
        placeholder=" Confirmar uPIN"
        maxLength={6}
        secureTextEntry={true}
        keyboardType="numeric"
        password={true}
        onChangeText={(upinew2)=>this.changeupinew2(upinew2)}
        value={this.state.upinew2}
       

        />

        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "ESTABLECER uPIN"
        type="clear"
        onPress={() => 
          this.validado()

        } 
        />

        </View>

        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
            <Text style={styles.modaltext}>uPIN incorrecto/No coincide</Text>
              <Text style={styles.modaltext2}>Recuerda que tu uPIN tiene 6 numeros y debe coincidir en ambos recuadros.</Text>
            
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
    marginBottom: 30,
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
