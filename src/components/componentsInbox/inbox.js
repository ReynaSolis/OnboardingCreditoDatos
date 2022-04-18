import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from "react-native";



//Inbox
export default class Inbox extends React.Component{

    render(){

    return (
      <ScrollView>
        
        <View style={styles.containergeneral}>
          <Text style={styles.title}>Bienvenida/o a tu correo personal DPR</Text>
          <Text style={styles.title}>SUBIR DOCUMENTACION</Text>

      </View>
      </ScrollView>
        
    )
}
}

const styles = StyleSheet.create({
    containergeneral:{ 
    backgroundColor: 'white',

    },
    title: { 
    marginLeft:'auto',
    marginRight:'auto',
    fontWeight:'bold',
    fontSize: 15,
    marginTop:10,
    marginBottom:10,
    backgroundColor:'white'
    },

})