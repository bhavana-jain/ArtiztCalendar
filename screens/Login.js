  import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  StatusBar, Platform, 
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import LoginCarousel from './LoginCarousel.js';
import * as Expo from 'expo';
import AddTask from './AddTask.js';
const {width, height} = Dimensions.get('window');
const dimension = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// Login Component
export default class Login extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      size: { width, height },
      googleSignedIn:  false
    };
  };
 
  render() {
    alert(this.state.googleSignedIn);
    return (
       <View>
<AddTask></AddTask>
       </View>
    )}
}

const styles = StyleSheet.create({
  bullet: {
    width: 25,
    height: 5,
    backgroundColor: '#f8f2ff',
    borderColor: 'transparent'
  },
  activeBullet: {
    width: 25,
    height: 5,
    borderColor: 'transparent',
    backgroundColor: '#541fa1' 
  },
  layoutSpacer : {
    marginLeft: 40, 
    marginRight: 40
  }, 
  textSpacer: {
    marginBottom: 10
  },
  statusBar: {
marginTop: 0
}, 
 centerText:{
   textAlign: "center"
 }

});