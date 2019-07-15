import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  Button,
  StatusBar, Platform, 
  ImageBackground, 
  ScrollView, TouchableOpacity
} from 'react-native';

// To Access navigation props from anywhere
import { withNavigation } from 'react-navigation';

const { width, height } = Dimensions.get('screen');
const layout = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
class CalenderBg extends Component {
 
  constructor(props) {
    super(props);
  }


  render() {
    return (
   <View style={{ alignContent: "center", justifyContent: "center", alignItems: "center", height: layout.height,
   width: layout.width}}>
   <ImageBackground source={require('../assets/images/calender-img.png')} resizeMode="contain"
        style={{width: 170, height: 150, zIndex: 40, alignContent: "center", alignItems: "center"}}>
    </ImageBackground > 
    <View style={styles.spacer}>
    <Text style={{color: "purple", fontWeight: "bold", textAlign: "center"}}>Welcome to Artizt Calendar</Text>
    <Text style={{textAlign: "center"}}>Tab on the Add Task button to add your task</Text>
    </View>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('TaskForm')} 
    style={{alignContent: "center", justifyContent: "center", display:'flex'}}>
                <View style = {{backgroundColor: 'purple', paddingTop: 20,paddingBottom:20, paddingLeft: '20%', paddingRight: '20%', margin: 20}}
                       >
                    <Text style = {{color: 'white', textAlign: "center", fontWeight: "bold", fontSize: 16}}>Create Event</Text>
                </View>
            </TouchableOpacity>
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

export default withNavigation(CalenderBg);
