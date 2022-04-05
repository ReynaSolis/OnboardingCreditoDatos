import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from "react-native";
import { ListItem, Avatar } from 'react-native-elements';
import { emails } from './emailsBase';
import buscador from "../../../assets/img/buscador.png";
import usuario from "../../../assets/img/usuario.png";

export default class Emails extends React.Component{

  constructor(props){
    super(props)
    this.state={
      text: '',
      userFilter: emails,
    }

  }

  //funcion searchbar filtro
  changetext(textToSearch){

    this.setState({
userFilter: emails.filter(email =>
  email.sender.toLowerCase().includes(textToSearch.toLowerCase())||
  email.subject.toLowerCase().includes(textToSearch.toLowerCase())||
  email.description.toLowerCase().includes(textToSearch.toLowerCase())||
  email.sentDate.toLowerCase().includes(textToSearch.toLowerCase())
  )})}

    render(){
        return(

        <View>
          <View style={styles.search}>
          <Image style={styles.buscador} source={buscador}/>
          <TextInput
          style={styles.searchinput}
          placeholder="Search"
          onChangeText={(text)=>this.changetext(text)}
        
          />
          <Image style={styles.usuario} source={usuario}/>
          </View>

            {
              this.state.userFilter.map((email) => (
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
      search: {
        marginBottom:10,
        marginTop:10,
        borderWidth:1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
      },
      searchinput: {
        height:40,
        marginLeft:'auto',
        marginRight:'auto',
        width:230,
      },
      buscador: {
        width: 30,
        height: 30,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:5,
        
       },
       usuario: {
        width: 30,
        height: 30,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:5,
       },

})