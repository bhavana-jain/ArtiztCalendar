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
<View style={{backgroundColor: '#541fa1'}}>
<TouchableOpacity style={{ marginLeft: 25, marginTop:5, marginRight:5, backgroundColor: 'white', borderRadius: 5, marginBottom: 5, width: '50%'}} activeOpacity ={0.9}>
  <Text style={{ padding: 5, color: '#541fa1', textTransform: "uppercase", fontSize: 12, textAlign: 'center'}}>payment received </Text>
</TouchableOpacity>
</View>
     )
   }
 }
 class EventLocation extends Component{
constructor(props){
  super(props)
}
render() {
  return (
<View style={{display: 'flex', flexDirection: 'row', padding: 10, alignContent:"center"}}>
  <ImageBackground source={require('../assets/images/location-icon.png')} style={{width: 15, height: 20}} resizeMode="contain"></ImageBackground>
  <Text style={{paddingLeft: 5, color: 'white', fontSize: 12}}>South Korea</Text>
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
  <ScrollView style={{flexGrow: 1}}>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <View style={{width: '20%', backgroundColor: 'white', lineHeight: 0, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontWeight: "bold"}}>20</Text>
            <Text> May</Text>
        </View>
        <View style={{width: '80%', backgroundColor: '#541fa1', alignContent:"flex-start", paddingTop: 10}}>
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 0, }}>
              <View style={{backgroundColor: 'red', width: 10, height: 10, borderRadius: 10, marginRight: 5, marginTop: 4}}></View>
            <Text style={{color:"white", fontWeight: "bold", fontSize: 14, textAlignVertical:"center", width: '60%'}}>3:40PM</Text>
                <Text style={{fontSize: 10,color: 'white', textAlignVertical:"center", textAlign: "right", width: '30%'}}>2h 15min</Text>
            
                </View>
            <View style={{paddingLeft: 25 , paddingRight: 10, paddingBottom: 10}}>
            <Text style={{color: "white"}}>Samsung Client Sales Review</Text>
            </View>
            <View style={{borderTopColor: 'white', borderTopWidth:1}}>
{this.props.status == 'upcoming' ? <EventLocation></EventLocation> : null}
{this.props.status == 'completed' ? <Text style={{padding: 10, color: 'white', fontWeight: "bold", textAlign: "right", textTransform: "uppercase"}}>completed</Text> : null}
{this.props.status == 'paymentPending' ? <CustomButton></CustomButton>: null}
            </View>
            </View>
      </View>
      </ScrollView>
      </View>
    )
}
}

const styles = StyleSheet.create({
 
});