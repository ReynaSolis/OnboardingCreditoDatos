import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";


//consultar upin
export default class ConsultarUpin extends React.Component{
    render(){
    return (
        <View>
            <Text style={styles.title}>no recuerdo el upin</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    title: {
     color: "black",
     marginLeft: 'auto',
     marginRight: 'auto',
    },
})