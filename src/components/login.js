import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";

//curp
export default function login ({ navigation}){

  return (
        <View>
         <Text style={styles.title}>Bienvenida/o a tu correo personal DPR</Text>
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.curp}>Ingresa tu CURP:</Text>

         <TextInput style={styles.input} 
         placeholder="Ingresa los 18 caracteres"
         maxLength={18}
         
         
         />

        <Text onPress={() => Linking.openURL('https://www.gob.mx/curp/')}
        style={styles.curpgob}>¿Olvidaste tu CURP?</Text>

        <Text onPress={() => navigation.navigate('registro') }
        style={styles.curpgob}>¡Registrate!</Text>
        
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "Entendido"
        type="clear"
        onPress={() => {
          navigation.navigate('upin')
        }
          /*
        {
          if(this.state.curp.length==18){
            console.log('se busca en la base de datos.');
            console.log(this.state.curp + this.state.curp.length);
            if(this.state.curp==true){
              navigation.navigate('upin')
            }else{
              navigation.navigate('registro')
            }
          }else if(this.state.curp.length<18){
            Alert.alert('No es correcto');
            console.log('no es correcto el curp');
          }
        }
        */

        } 
        />
        </View>

         </View>

         
     
  );
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
