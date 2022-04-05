//modales al abrir los emails
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Linking } from "react-native";
import footer from "../../../assets/img/footer.jpg";
import Hyperlink from 'react-native-hyperlink';

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
        
    <Image 
    source={{ uri: this.props.email.senderImageUrl }} 
    style={styles.avatar} />
    <Text style={[styles.sender]}>{this.props.email.sender}</Text>
    <Text style={[styles.sentDate]}>{this.props.email.sentDate}</Text>
    
    </View>

    <Text style={[styles.subject]}>{this.props.email.subject}</Text>
    <Hyperlink linkDefault={true} onPress={Linking.openURL} linkStyle={{ color:'blue', textDecorationLine: 'underline'}}>
    <Text>{this.props.email.description}</Text>
    </Hyperlink>

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
        width: 40,
        marginRight:10,
      },
      sender: {
        fontWeight: 'bold',
        marginRight:10,
      },
      subject: {
        fontWeight: 'bold',
        marginBottom:10,

      },
      sentDate: {
        fontStyle:'italic',
      },
      containeremail:{
        flexDirection:'row',
        marginBottom:20,
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
       link:{
         fontWeight:'bold',
       }
})