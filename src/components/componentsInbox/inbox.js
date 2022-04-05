import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { List, ListItem, Avatar, SearchBar  } from 'react-native-elements';
import footer from "../../../assets/img/footer.jpg";
import Emails from './emails';
import Email from './email';
import { emails } from './emailsBase';


//Inbox
export default class Inbox extends React.Component{

  constructor(props){
    super(props)

    this.state={
      show: false,
      transper:true,
      text: '',
      selectEmail:{},

    }

  }

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

    return (
      <ScrollView>
        
        <View style={styles.containergeneral}>
          <Text style={styles.title}>Bienvenida/o a tu correo personal DPR</Text>
      

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

    footerimg: {
      width: 30,
      height: 30,
      marginBottom:10,
      marginTop:10,
     },
     containerfooter: {
      flex:0.1,
      alignSelf: 'center',
     },
})