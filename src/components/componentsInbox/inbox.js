import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { List, ListItem, Avatar } from 'react-native-elements';
import { emails } from './emails';
import EmailItem from './EmailItem';
import { SwipeListView } from "react-native-swipe-list-view";


//inbox
export default class Inbox extends React.Component{
    constructor(){
        super()
        this.state={
            actionTextVisible:'',
            setActionTextVisible:'',
            offset:'',
            setOffset:'',
        }
    }

   actionButtonVisibilityHandler = (event) => {
    var currentOffset = event.nativeEvent.contentOffset.y;
    var direction = currentOffset > offset ? "down" : "up";
    setOffset(currentOffset);
    if (direction == "up") setActionTextVisible(false);
    else setActionTextVisible(true);
  };

    render(){
    return (
        
        <View style={styles.container}>
        <Text>Bienvenido a tu Inbox</Text>

        <SwipeListView
        scrollEnabled={true}
        data={emails}
        renderItem={({ item }) => <EmailItem item={item} />}
        onScroll={(event) => actionButtonVisibilityHandler(event)}
        swipeToClosePercent={100}
        />

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
    textAlign: 'center',
    },
    emails: { 
    borderWidth:2,
    marginLeft:20,
    marginRight: 20,
    },
    container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
      },
})