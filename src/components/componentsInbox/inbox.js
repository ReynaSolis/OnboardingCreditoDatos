import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableHighlight, Modal } from "react-native";
import { List, ListItem, Avatar, SearchBar  } from 'react-native-elements';
import footer from "../../../assets/img/footer.jpg";
import Emails from './emails';
import Email from './email';


//Inbox
export default class Inbox extends React.Component{

  constructor(props){
    super(props)

    this.state={
      show: false,
      transper:true,
      text: '',
      selectEmail:{},
      isLoading: true,
    }
  }


  updateSearch(text) {

    const newData = this.arrayholder.filter(function(email){
      const itemData = item.fruit_name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
  })
  this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
  })
  };

  /*refresh(){
    this.props.navigation.navigate('Inbox')
  }*/

  toggleEmail(){
    this.setState({
      show:!this.state.show
    })
  }

  displayEmail(email){
this.setState({
  selectEmail:email
})
this.toggleEmail();
  }

    render(){
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
    return (
        
        <View style={styles.containergeneral}>
          <Text style={styles.title}>Bienvenida/o a tu correo personal DPR</Text>
      
          <View style={styles.search}>
          <SearchBar
          theme={{ colors: { primary: '#000000' } }}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.text}
          />
          </View>

      <Emails
      onSelectEmail={(email)=> this.displayEmail(email)}
      />
      <Email
      email={this.state.selectEmail}
      visible={this.state.show}
      onToggleEmail={()=>this.toggleEmail()} 
      />
      
      <View style={styles.containerfooter}>
      
      {//<TouchableHighlight onPress={() => this.refresh()}>
      }
      <Image style={styles.footerimg} source={footer}/>
      {//</TouchableHighlight>
      }
      </View>
      
      
      </View>

        
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
    search: {
      marginBottom:10,
    },
    footerimg: {
      width: 30,
      height: 30,
      marginBottom:10,
      marginTop:10,
     },
     containerfooter: {
       flexDirection:'col',
      flex:0.1,
      alignSelf: 'center',
     },
})