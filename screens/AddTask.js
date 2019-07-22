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
import LinearGradient from 'react-native-linear-gradient'

const layout  = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
export default class AddTask extends Component {
 
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
     
        <View style={{height: layout.height, backgroundColor:'#f2f8ff'}}>
<CalenderBg></CalenderBg>
<View style={{position:"absolute",height: layout.height, width: layout.width}}>
<ImageBackground source={require('../assets/images/bg-share-image.png')} 
      style={{ width: layout.width, height: '70%', bottom:'-53%',  zIndex: -1}} resizeMode="stretch">
</ImageBackground >
</View>
    </View>
     
    )
}
}

const styles = StyleSheet.create({
 
});