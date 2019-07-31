import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  Button,
  StatusBar, Platform, 
  ImageBackground,  
  Picker
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator, withNavigation } from 'react-navigation';
import Login from '../screens/Login';
import AddTask from '../screens/AddTask';
import TaskForm from '../screens/TaskForm';
 
const layout  = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 class FormHeader extends Component {
 
  constructor(props) {
    super(props);
 }

  render() {
    return (
    
     <View style={{marginTop: STATUSBAR_HEIGHT, paddingLeft: 10, display: 'flex', backgroundColor: '#541fa1', height: 50, alignItems: 'flex-start', justifyContent: 'center'}}>
      <TouchableOpacity activeOpacity={0.9} onPress ={ () => {this.props.navigation.navigate("TaskForm");
}}>
      <ImageBackground source={require('../assets/images/left-arrow.png')} style={{width: 20, height: 20}} resizeMode="contain">
        </ImageBackground>
      </TouchableOpacity>
     <View>
     <Text style={{color:'white', fontSize: 12}}>Client meeeting</Text>
     </View>
     </View>
    )
    }
}
export default withNavigation(FormHeader);