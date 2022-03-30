import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button, CheckBox } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";

export default class ContinuarUpin extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show:false,
      check:false,
      aviso:true,
      avisop:false,
    }
  }

  continuar(){
    if(this.state.check==false){
    this.setState({show:true})
  }else{
    this.props.navigation.navigate('inbox')
  }
    
  }

  checked(){
    this.setState({check:true})
  }

  inbox(){
    if(this.state.check==true){
      this.setState({show:false})
      this.setState({aviso:false})
      this.setState({avisop:false})
      this.props.navigation.navigate('inbox')
    }else{
      this.setState({show:false})
      this.setState({avisop:true})
    }
    
  }

  hidden(){
    this.setState({aviso:false})
  }

  hidden2(){
    this.setState({avisop:false})
    this.setState({show:true})
  }


render(){
  const{data}=this.props.route.params
  return (
        <View>
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Acceso con uPIN</Text>
         <Text style={styles.upin}>uPIN:</Text>

         <TextInput style={styles.input} 
         placeholder=""
         maxLength={6}
         secureTextEntry={true}
         keyboardType="numeric"
         password={true}
         value={data}
         />
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "CONTINUAR"
        type="clear"
        onPress={() => 
          this.continuar()
        } 
        />
        </View>


        <Modal
        //modal si no se acepta la politica de privacidad
        transparent={true}
        visible={this.state.avisop}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
            <Text style={styles.modaltext}>Acepta la Politica de Privacidad</Text>
            
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

        <Modal
        transparent={true}
        visible={this.state.aviso}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
            <Text style={styles.modaltext}>Telefono celular propio</Text>
              <Text style={styles.modaltext2}>Tu uPIN se ha registrado con exito.</Text>
            
              <View style={styles.btn}>
              <Button
               theme={{ colors: { primary: '#000000' } }}
               title= "ACEPTAR"
               type="clear"
              onPress={() => this.hidden()} 
               />
               </View>
            </View>
            </View>

        </Modal>

        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Terminos y Condiciones.</Text>
              <Text style={styles.modaltext2}>El aviso de privacidad y proteccion de los datos de DPR es para proteger los datos personales 
              de sus Clientes y de los interesados receptores de informacion del cliente, por lo que los datos recabados en la plataforma, 
              estaran protegidos conforme a los dispuesto por la Ley General de Proteccion de Datos Personales en Posesion de los Sujetos 
              Obligados.</Text>
              

              
              <View>
              <CheckBox style={styles.checkbox}
               title="Acepto la Politica de Privacidad"
               checked={this.state.check}
               onPress= {() => this.checked()}
              />
             </View>
             

              <View style={styles.btn}>
              <Button
               theme={{ colors: { primary: '#000000' } }}
               title= "ACEPTAR"
               type="clear"
              onPress={() => this.inbox()} 
               />
               </View>

               <Text onPress={() => Linking.openURL('https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf')}
              style={styles.ley}>CONSULTAR POLITICA DE PRIVACIDAD</Text>
            </View>
            </View>
        </Modal>

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
    display: 'flex',
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
    fontWeight: 'bold'
    
  },
  modaltext2: {
    fontSize:10,
    
  },
  ley: {
    fontSize:10,
    textDecorationLine: 'underline',
    marginTop:20,
    
  },
});
