import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableHighlight } from "react-native";
import { ListItem, Avatar } from 'react-native-elements';
import { emails } from './emailsBase';

export default class Emails extends React.Component{
    render(){
        return(
            <View style={styles.containerlista}>
            {
              emails.map((email) => (
                <ListItem 
                key={email.id} 
                bottomDivider
                onPress={()=> this.props.onSelectEmail(email)}
                style={[,]}
                >
                  <Avatar source={{uri: email.senderImageUrl}} />
                  <ListItem.Content>
                    {
                    //remitente
                    }
                    <ListItem.Title numberOfLines={1} 
                    //style={[styles.sender, email.isRead ?  { fontWeight:'normal' }: { fontWeight:'bold' }]}
                    >{email.sender}</ListItem.Title>
                    {
                    //fecha
                    }
                    <ListItem.Title numberOfLines={1} style={styles.date}>{email.sentDate}</ListItem.Title>
                    {
                    //asunto
                    }
                    <ListItem.Subtitle numberOfLines={1}>{email.subject}</ListItem.Subtitle>
                    
                  </ListItem.Content>
                  
                </ListItem>
              ))
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    date: { 
    marginLeft:'auto',
    fontSize:10,
    },
    sender: { 
      fontSize:15,
      },

})