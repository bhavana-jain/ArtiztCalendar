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
import { createDrawerNavigator, withNavigation, navigation } from 'react-navigation';
import Login from '../screens/Login';
import AddTask from '../screens/AddTask';
import TaskForm from '../screens/TaskForm';
 
const layout  = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 const DrawerMenu = createDrawerNavigator (
   {
     Login: Login
   }, 
   {  
     AddTask: AddTask
   }
 )
 class CustomHeader extends Component {
 
  constructor(props) {
    super(props);
    this.state= {
month : "may"
    }
  }
  updateMonth = (month) => {
    this.setState({ month: month })
 }

  render() {
    return (
      <View>
    
     <View style={{marginTop: STATUSBAR_HEIGHT, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, display: 'flex', flexDirection: 'row'}}>
       <View style={{width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity activeOpacity={0.9} onPress ={ () => {this.props.navigation.openDrawer();
}}>
      <ImageBackground source={require('../assets/images/list-menu.png')} style={{width: 20, height: 20}}>
        </ImageBackground>
      </TouchableOpacity>
        <View>
        { <Picker selectedValue = {this.state.month} onValueChange = {this.updateMonth} style={{width: 200, justifyContent: 'flex-end'}}>
               <Picker.Item label = "January 2019" value = "January 2019" />
               <Picker.Item label = "February 2019" value = "February 2019" />
               <Picker.Item label = "March 2019" value = "March 2019" />
            </Picker> }
        </View>
       </View>
       <View style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
       <ImageBackground source={require('../assets/images/clock.png')} style={{width: 15, height: 15}}></ImageBackground>
       <Text style={{lineHeight: 18}} > Delhi 5.30+GMT</Text>
       </View>
<View>

</View>
     </View>
     </View>
    )
    }
}
export default withNavigation(CustomHeader);