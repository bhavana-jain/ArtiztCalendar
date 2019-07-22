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
 
const layout  = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
export default class CustomHeader extends Component {
 
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
     <View style={{marginTop: STATUSBAR_HEIGHT, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row'}}>
       <View style={{width: '50%'}}>
       <ImageBackground source={require('../assets/images/list-menu.png')} style={{width: 20, height: 20}}>
        </ImageBackground>
        {/* <Picker selectedValue = {this.state.month} onValueChange = {this.updateMonth} style={{width: '50%'}}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker> */}
       </View>
       <View style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
       <ImageBackground source={require('../assets/images/clock.png')} style={{width: 15, height: 15}}></ImageBackground>
       <Text style={{lineHeight: 18}} > Delhi 5.30+GMT</Text>
       </View>
<View>

</View>
     </View>
    )
    }
}

const styles = StyleSheet.create({
 
});