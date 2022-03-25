import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";


export default function generaUpin ({ navigation}){

  return (
    <View>
        <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>A continuacion genera tu uPIN de 6 numeros secretos y no lo compartas con nadie.</Text>
         <Image style={styles.logo2} source={logo}/>

        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "ENTENDIDO"
        type="clear"
        onPress={() => {
          navigation.navigate('crearUpin')
        }

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
     textAlign: 'center',
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
        marginTop: 30,
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