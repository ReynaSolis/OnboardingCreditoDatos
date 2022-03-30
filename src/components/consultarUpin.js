import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import logo from "../../assets/img/logo.png";


//consultar upin
export default class ConsultarUpin extends React.Component{
    render(){
    return (
        <View styles={styles.container}>
            
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Comunicate al: 55 54 65 67 87</Text>

        </View>
    )
}
}

const styles = StyleSheet.create({
    title: {
     color: "black",
     marginLeft: 'auto',
     marginRight: 'auto',
     fontWeight:'bold',
    },
    logo: {
        width: 150,
        height: 150,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
       },
       container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
       },
})