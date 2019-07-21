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
import SplashScreen from '../screens/SplashScreen';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const dimension = Dimensions.get('screen')
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// Login Component
export default class Login extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      size: { width, height },
    };
  }
 
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
  //  this.setState({ size: { width: layout.width, height: layout.height - 100 } });
  this.setState({ size: { width: layout.width, height: '75%' } });
  }
 
  render() {
    return (
              <View style={{marginTop: STATUSBAR_HEIGHT,height: dimension.height, backgroundColor: 'white'}}>     
      <View style={[{}, styles.statusBar]} onLayout={this._onLayoutDidChange}>
        <Carousel style={[this.state.size]} autoplay = {false} bullets bulletStyle = {styles.bullet} chosenBulletStyle = {styles.activeBullet}>
          <View style={{width: dimension.width}}>
          <View style={{ height: '75%', width: dimension.width, marginBottom: 15}}>
   <ImageBackground source={require('../assets/images/SplashScreen_ArtWork.png')}
        style={{width: '100%', height: '100%'}} resizeMode="contain">
    </ImageBackground > 
   </View>
          <View style={styles.layoutSpacer}>
            <Text style={{fontWeight: "bold", fontSize: 18, textAlign: "center", paddingBottom: 10, color: '#541fa1'}}> Never forget a thing</Text>
            <Text style={{paddingBottom: 10}}>From your important bills to important projects we help you remember it all, anytime, anywhere</Text>
          </View>
          </View>
          <View style={{width: dimension.width}}>
          <View style={{ height: '75%', width: dimension.width, marginBottom: 15}}>
   <ImageBackground source={require('../assets/images/SplashScreen_ArtWork.png')}
        style={{width: '100%', height: '100%'}} resizeMode="contain">
    </ImageBackground > 
   </View>
          <View style={styles.layoutSpacer}>
            <Text style={{fontWeight: "bold", fontSize: 18, textAlign: "center", paddingBottom: 10, color: '#541fa1'}}> Never forget a thing</Text>
            <Text>From your important bills to important projects we help you remember it all, anytime, anywhere</Text>
          </View>
          </View>
          <View style={{width: dimension.width}}>
          <View style={{ height: '75%', width: dimension.width, marginBottom: 15}}>
   <ImageBackground source={require('../assets/images/SplashScreen_ArtWork.png')}
        style={{width: '100%', height: '100%'}} resizeMode="contain">
    </ImageBackground > 
   </View>
          <View style={styles.layoutSpacer}>
            <Text style={{fontWeight: "bold", fontSize: 18, textAlign: "center", paddingBottom: 10, color: '#541fa1'}}> Never forget a thing</Text>
            <Text>From your important bills to important projects we help you remember it all, anytime, anywhere</Text>
          </View>
          </View>
        </Carousel>
        <View style={styles.layoutSpacer}>     
        <TouchableOpacity activeOpacity={0.9} style={{display: 'flex', flexDirection:'row', borderColor: '#f83333', borderWidth: 1, borderRadius: 2}} onPress={() => this.props.navigation.navigate('AddTask')}>
          <View style={{width: '15%',alignContent:"center", justifyContent: "center"}}>
            <ImageBackground source={require('../assets/images/Google_image.png')} style={{width: 40, height: 40}}></ImageBackground></View>
          <View style={{backgroundColor: '#f83333', width: '85%', padding: 10}}>
            <Text style={{color: 'white', textAlign: "center"}}>Continue with Google</Text></View>
        </TouchableOpacity>
        <View style={[{display: 'flex', flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 25}]}>
<Text style={styles.centerText}>Already have an account? </Text>
<TouchableOpacity><Text style={{color:'#541fa1'}}>Sign In</Text></TouchableOpacity>
        </View>
        <Text style={styles.centerText}>
By creating an account you agree to our Terms of use and Privacy Policy 
        </Text>
        </View>
      </View>
      </View>

    );
  }
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