import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


//recuperacion uPIN

export default class ConsultarUpin extends React.Component{

    constructor(){
        super()
        this.state={
          emailv: '',
          show: false,
        }
      }
      
      changeemail(emailv){
        this.setState({emailv})
        }

//////////////// validacion email
        validado () {
          this.setState({show:true})
            }



          hidden(){
            this.props.navigation.navigate('NuevoUpin')
          }



    render(){


    return (
      <KeyboardAwareScrollView>
        <View styles={styles.container}>
            
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Recuperacion uPIN</Text>
            <Text style={styles.email}>Se te enviara un codigo a tu telefono.</Text>

            <View style={styles.btn}>
            <Button
            theme={{ colors: { primary: '#000000' } }}
            title= "Enviar codigo"
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
              <Text style={styles.modaltext}>Codigo Enviado.</Text>
              <Text style={styles.modaltext2}>Revisa tu bandeja de mensajeria.</Text>
        
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
    )
}
}

const styles = StyleSheet.create({
    title: {
     color: "black",
     marginLeft: 'auto',
     marginRight: 'auto',
     fontWeight:'bold',
     marginBottom:20,
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
        marginBottom:20,
        textTransform: 'lowercase',
       },
       email: {
        color: "black",
        marginLeft:15,
        marginBottom:20,
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
})