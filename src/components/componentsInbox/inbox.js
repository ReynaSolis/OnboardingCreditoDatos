import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { List, ListItem, Avatar } from 'react-native-elements';
import { emails } from './emails';

//consultar upin
export default class Inbox extends React.Component{

    render(){
    return (
        
        <View>
        {
          emails.map((email) => (
            <ListItem key={email.id} bottomDivider>
              <Avatar source={{uri: email.senderImageUrl}} />
              <ListItem.Content>
                <ListItem.Title>{email.sender}</ListItem.Title>
                <ListItem.Subtitle>{email.subject}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>

        
    )
}
}

const styles = StyleSheet.create({
    title: { 
    marginLeft:'auto',
    marginRight:'auto',
    fontWeight:'bold',
    fontSize: 15,
    },
    emails: { 
    borderWidth:2,
    marginLeft:20,
    marginRight: 20,
    },
})