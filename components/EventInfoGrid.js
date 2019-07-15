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
import { TouchableOpacity } from 'react-native-gesture-handler';
 
const layout  = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
export default class EventInfoGrid extends Component {
 
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
<View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{width: '30%', backgroundColor: 'white', lineHeight: 0, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
            <Text>20</Text>
            <Text> May</Text>
        </View>
        <View style={{width: '70%', backgroundColor: 'violet', alignContent:"flex-start", paddingTop: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 0}}>
            
            <Text style={{color:"white", fontWeight: "bold", fontSize: 14, textAlignVertical:"center", width: '70%'}}>3:30PM</Text>
         
           
                <Text style={{fontSize: 10,color: 'white', textAlignVertical:"center", textAlign: "right", width: '30%'}}>2h 15min</Text>
            </View>
            <View style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>
            <Text style={{color: "white"}}>Samsung Client Sales Review</Text>
            </View>
            <View style={{borderTopColor: 'white', borderTopWidth:1}}>
<Text style={{paddingLeft: 10, paddingRight: 10,paddingTop: 10, paddingBottom: 10, color: 'white' }}>B12 South Korea</Text>
            </View>
            </View>
      </View></View>

     
    )
}
}

const styles = StyleSheet.create({
 
});