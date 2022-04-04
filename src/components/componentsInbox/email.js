//modales al abrir los emails
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableHighlight, Modal } from "react-native";
import { Button } from 'react-native-elements';
import footer from "../../../assets/img/footer.jpg";

export default class Email extends React.Component{
    render(){
        return(
        
    <Modal
    transparent={this.props.transper}
    visible={this.props.visible}
    >
          
    
    <View style={styles.modalcontainer}>
    <View style={styles.modaltextcontainer}>
        <View style={styles.containeremail}>
        <View style={styles.containeremail1}>
    <Image 
    source={{ uri: this.props.email.senderImageUrl }} 
    style={styles.avatar} />
    </View>
    <View style={styles.containeremail2}>
    <Text style={[styles.sender]}>{this.props.email.sender}</Text>
    </View>
    <View style={styles.containeremail3}>
    <Text style={[styles.sentDate]}>{this.props.email.sentDate}</Text>
    </View>
    </View>
    <Text style={[styles.subject]}>{this.props.email.subject}</Text>

    <Text style={[styles.description]}>{this.props.email.description}</Text>
              

    <View style={styles.containerfooter}>
      
      <TouchableHighlight onPress={() => this.props.onToggleEmail()}>
      <Image style={styles.footerimg} source={footer}/>
      </TouchableHighlight>
    
    </View>
    </View>
    </View>
      </Modal>
      
        )
    }
}

const styles = StyleSheet.create({
     //modales
     modalcontainer: {
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'center',
      alignContent: 'center',
      backgroundColor:'white'
      
    },
    modaltextcontainer: {
      alignItems: 'center',
      backgroundColor:'white',
      borderWidth:3,
      margin:50,
      padding:40,
      
    },
      avatar: {
        height: 40, 
        width: 40 
      },
      sender: {
        fontWeight: 'bold',
      },
      subject: {
        fontWeight: 'bold',
        marginBottom:10,

      },
      sentDate: {
        fontStyle:'italic',
      },
      description: {
        fontStyle:'normal',
      },
      containeremail:{
        
          marginBottom:20,
      },
      containeremail1:{
        
        marginRight:5,
        
    },
    containeremail2:{
      
        marginLeft:5,
        marginRight:5,
        
    },
    containeremail3:{
      
        marginLeft:5,
        
    },
    footerimg: {
        width: 30,
        height: 30,
        marginBottom:10,
        marginTop:10,
       },
       containerfooter: {
        marginBottom:10,
        marginTop:10,
        alignSelf: 'center',
       },
})