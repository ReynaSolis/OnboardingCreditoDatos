import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";


export default function generaUpin ({ navigation}){

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
        onPress={() => {
          navigation.navigate('telefono')
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
   btn: {
     marginTop: 20,
     marginBottom:100,
     marginLeft: 20,
     marginRight: 20,
     borderWidth:1,
     borderRadius:20,
     
   },
 
 });