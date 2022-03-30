import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";

//registro login
export default class Registro extends React.Component {

  constructor(){
    super()
    this.state={
      show: true,
    }
  }

  hidden(){
    this.setState({show:false})
  }

  render(){
  return (
    <View>
     
        <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>A continuacion crearas tu cuenta IDe</Text>
         <Image style={styles.logo2} source={logo}/>
         <Text style={styles.title}>Tus documentos de identidad Electronica estaran cifrados y seguros.</Text>

        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "ENTENDIDO"
        type="clear"
        onPress={() => 
          this.props.navigation.navigate('telefono')
        } 
        />
        </View>

        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Telefono celular propio.</Text>
              <Text style={styles.modaltext2}>Recuerda que por fines de provacidad es importante que lo realices desde tu telefono celular propio.</Text>


  

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
     textAlign: 'center',
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
    logo2: {
        width: 250,
        height: 150,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: 30,
       },
   btn: {
     marginTop: 20,
     marginBottom:50,
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