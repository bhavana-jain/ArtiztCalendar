import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  Button,
  StatusBar, Platform, 
  ImageBackground, 
  TouchableOpacity
} from 'react-native';
import EventInfoGrid from '../components/EventInfoGrid';


const { width, height } = Dimensions.get('screen');
const layout = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
export default class CustomTab extends Component {
 
  constructor(props) {
    super(props);
    this.state ={
      tab1: true,
      tab2: false, 
      tab3: false, 
      allTab: true
    }
   
  }
  updateTab = (tabName) => {
if(tabName == "tab1"){
this.setState({
  tab1: true,
  tab2: false,
  tab3: false
})
}
else if(tabName == "tab2"){

    this.setState({
      tab1: false,
      tab2: true,
      tab3: false
    })
    
}
else {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true
    })
    
}
  }

  render() {
    return (
      <View style={{margin: 10}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
      <TouchableOpacity style={{backgroundColor:'purple', padding:5, borderRadius:5, width:'33.33%'}} 
      onPress= {()=> this.updateTab('tab1')}>
        <View>
          <ImageBackground source={require('../assets/images/events.png')} style={{width: 30, height: 30, zIndex: -1}}>

          </ImageBackground>
          <Text style={{color: 'white', fontSize: 12}}> Upcoming Events</Text>
          <Text style={{color: 'white', fontSize: 10}}> 15 Events</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor:'pink', padding:5, borderRadius:5, width:'33.33%', marginLeft: 5, marginRight: 5}} 
      onPress= {()=> this.updateTab('tab2')}>
        <View>
          <ImageBackground source={require('../assets/images/events.png')} style={{width: 30, height: 30, zIndex: -1}}>

          </ImageBackground>
          <Text style={{color: 'white', fontSize: 12}}> Upcoming Events</Text>
          <Text style={{color: 'white', fontSize: 10}}> 15 Events</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'pink', padding:5, borderRadius:5, width:'33.33%'}} 
      onPress= {()=> this.updateTab('tab3')}>
        <View>
          <ImageBackground source={require('../assets/images/events.png')} style={{width: 30, height: 30, zIndex: -1}}>

          </ImageBackground>
          <Text style={{color: 'white', fontSize: 12}}> Upcoming Events</Text>
          <Text style={{color: 'white', fontSize: 10}}> 15 Events</Text>
          </View>
          </TouchableOpacity>
           </View>
      <View style={{display: "flex", flexDirection: "row", color:'red'}}>
                {this.state.tab1 && !this.state.tab2 && !this.state.tab3 ? <Text>Tab 1</Text> : null}
                {this.state.tab2 && !this.state.tab1 && !this.state.tab3 ? <Text>Tab 2</Text> : null}
                {this.state.tab3 && !this.state.tab2 && !this.state.tab1 ? <Text>Tab 3</Text> : null}
            </View>
    </View>
    )
}
}

const styles = StyleSheet.create({
 spacer : {
  marginTop: 20,
  marginBottom: 20,
  textAlign: "center"
 }
});

