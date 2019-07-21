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

 class CustomButton extends Component {
   constructor(props){
     super(props);
   }
   render() {
     return (
<View style={{backgroundColor: 'purple'}}>
<TouchableOpacity style={{ margin: 10, backgroundColor: 'white', borderRadius: 5}}>
  <Text style={{ padding: 5, color: 'purple'}}>payment pending</Text>
</TouchableOpacity>
</View>
     )
   }
 }
export default class EventInfoGrid extends Component {
 
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
<View>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <View style={{width: '20%', backgroundColor: 'white', lineHeight: 0, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontWeight: "bold"}}>20</Text>
            <Text> May</Text>
        </View>
        <View style={{width: '80%', backgroundColor: 'purple', alignContent:"flex-start", paddingTop: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 0}}>
            
            <Text style={{color:"white", fontWeight: "bold", fontSize: 14, textAlignVertical:"center", width: '70%'}}>3:30PM</Text>
         
           
                <Text style={{fontSize: 10,color: 'white', textAlignVertical:"center", textAlign: "right", width: '30%'}}>2h 15min</Text>
            </View>
            <View style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>
            <Text style={{color: "white"}}>Samsung Client Sales Review</Text>
            </View>
            <View style={{borderTopColor: 'white', borderTopWidth:1}}>
{this.props.status == 'upcoming' ? <Text style={{padding: 10, color: 'white', fontWeight: "bold", textAlign: "right" }}>South Korea</Text> : null}
{this.props.status == 'paymentPending' ? <Text style={{padding: 10, color: 'white', fontWeight: "bold", textAlign: "right" }}>payment pending</Text> : null}
{this.props.status == 'completed' ? <CustomButton></CustomButton>: null}
            </View>
            </View>
      </View></View>
  
     
    )
}
}

const styles = StyleSheet.create({
 
});