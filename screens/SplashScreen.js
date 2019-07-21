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

 
class SplashScreen extends Component {
 
  constructor(props) {
    super(props);
  }


  render() {
    return (
   <View style={{ height: '75%', width: layout.width}}>
   <ImageBackground source={require('../assets/images/SplashScreen_ArtWork.png')}
        style={{width: '100%', height: '100%'}}>
    </ImageBackground > 
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

export default SplashScreen;
