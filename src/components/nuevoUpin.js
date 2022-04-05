import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//nuevo upin
export default class NuevoUpin extends React.Component{
  constructor(props){
    super(props)
    this.state={
      upinew1: '',
      upinew2: '',
      upinewt: '',
      show: false,
      temporal: false,
    }
  }
  //oculta modales
  hidden(){
    this.setState({show:false})
  }
  hidden2(){
    this.setState({temporal:false})
  }
  
  //cambios de input
  changeupinew1(upinew1){
    this.setState({upinew1})
    }
  changeupinew2(upinew2){
  this.setState({upinew2})
  }

  changeupinewt(upinewt){
    this.setState({upinewt})
    }
  
  //validacion
  validado(){
      //primero se verifica el codigo temporal
      if(this.state.upinewt.length==6){
        let num = this.state.upinewt.replace(".", '');
     if(isNaN(num)){
       //no es un numero
       this.setState({temporal:true})
     }else{
      let num1 = this.state.upinew1.replace(".", '');
      let num2 = this.state.upinew2.replace(".", '');
      if(isNaN(num1) && isNaN(num2)){
        //no es un numero
        this.setState({show:true})
      }else{

          //validacion de upins iguales
        if(this.state.upinew1.length==6 && this.state.upinew2.length==6 &&
            this.state.upinew1 === this.state.upinew2){
                //actualiza upin
            this.props.navigation.navigate('ContinuarUpin', {data:this.state.upinew2})
            
          }else{
            this.setState({show:true})
          }}}
      }else{
        this.setState({temporal:true})
      }
  
  }

  
  
  
  

  render(){
    
  return (
    <KeyboardAwareScrollView>
        <View>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Codigo de verificacion</Text>
         <Text style={styles.instruccion}>Ingresa el codigo de verificacion temporal que se te envio a tu correo previamente.</Text>

         <TextInput style={styles.input} 
         placeholder="uPIN temporal"
         maxLength={6}
         keyboardType="numeric"
         password={true}
         onChangeText={(upinewt)=>this.changeupinewt(upinewt)}
         value={this.state.upinewt}
         />

         <Text style={styles.instruccion}>Nuevo uPIN</Text>

         <TextInput style={styles.input} 
         placeholder="Nuevo uPIN 6 digitos"
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
        title= "REESTABLECER uPIN"
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

        <Modal
        transparent={true}
        visible={this.state.temporal}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
            <Text style={styles.modaltext}>Codigo temporal incorrecto/No coincide</Text>
              <Text style={styles.modaltext2}>Verifica que tu codigo temporal sea el mismo que se mando a tu correo previamente.</Text>
              <Text style={styles.modaltext2}>De lo contrario no podras generar uno nuevo.</Text>
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

         </KeyboardAwareScrollView>
     
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
    marginRight: 20,
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
