import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  Button,
  StatusBar, Platform, 
  ImageBackground, 
  ScrollView, 
  Image
} from 'react-native';
import CalenderBg from './Calendar-bg';
 
const layout  = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
export default class AddTask extends Component {
 
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
        <View>

<CalenderBg></CalenderBg>
<View style={{position:"absolute", top: 0, height: layout.height - STATUSBAR_HEIGHT, width: layout.width}}>
<ImageBackground source={require('../assets/images/bg-share-image.png')} 
      style={{height: layout.height - STATUSBAR_HEIGHT , width: layout.width, bottom: -110, left: -15 , right: -30, zIndex: -1}} resizeMode="stretch">
  </ImageBackground >
</View>

    </View>
     
    )
}
}

const styles = StyleSheet.create({
 
});