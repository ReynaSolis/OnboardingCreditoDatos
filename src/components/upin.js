import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";

//upin
export default function upin ({ navigation}){

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
         />

        <Text onPress={() => navigation.navigate('consultarUpin')}
        style={styles.email}>¿Olvidaste tu uPIN?</Text>
        
        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "INICIAR SESION"
        type="clear"
        onPress={() => {
          navigation.navigate('inbox')}
            //inicio sesion corrctamente lo dirige al inbox
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
    email: {
     color: "blue",
     marginTop:30,
     marginLeft: 'auto',
     marginRight: 'auto',
     textDecorationLine: 'underline'
   },
   btn: {
     marginTop: 20,
     marginBottom:100,
     marginLeft: 20,
     marginRight: 20,
     borderWidth:1,
     borderRadius:20,
     
   },
 
 });
 