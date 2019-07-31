import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  StatusBar, Platform, 
  ImageBackground, 
  TouchableOpacity, ScrollView
} from 'react-native';
import EventInfoGrid from '../components/EventInfoGrid';


const { width, height } = Dimensions.get('screen');
const layout = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
export default class CustomTab extends Component {
 
  constructor(props) {
    super(props);
    this.state ={
      tab1: true,
      tab2: false, 
      tab3: false, 
      allTab: true
    }
   
  }
  updateTab = (tabName) => {
if(tabName == "tab1"){
this.setState({
  tab1: true,
  tab2: false,
  tab3: false
})
}
else if(tabName == "tab2"){

    this.setState({
      tab1: false,
      tab2: true,
      tab3: false
    })
    
}
else {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true
    })
    
}
  }

  render() {
    return (
      <View style={{marginLeft: 10, marginRight: 10, flex: 1}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
      <TouchableOpacity style={this.state.tab1 ? styles.tabStyleActive : styles.tabStyle} 
      onPress= {()=> this.updateTab('tab1')} activeOpacity={0.8}>
        <View>
          <ImageBackground 
          source={this.state.tab1 ? require('../assets/images/events.png') : require('../assets/images/events-.png')}
           style={this.state.tab1 ? styles.imageCircleActive : styles.imageCircle}>
          </ImageBackground>
          <Text style={this.state.tab1 ? {color: '#f8f2ff', fontSize: 12} : {color: '#541fa1', fontSize: 12}}> Upcoming Events</Text>
          <Text  style={this.state.tab1 ? {color: '#f8f2ff', fontSize: 10} : {color: '#541fa1', fontSize: 10}}> 15 Events</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
         style={this.state.tab2 ? [styles.tabStyleActive, styles.tabSpacer] : [styles.tabStyle, styles.tabSpacer]} 
      onPress= {()=> this.updateTab('tab2')} activeOpacity={0.8}>
        <View style={{color: 'red'}}>
          <ImageBackground 
          source={this.state.tab2 ? require('../assets/images/payments.png') : require('../assets/images/payment.png')} style={this.state.tab2 ? styles.imageCircleActive : styles.imageCircle}>

          </ImageBackground>
          <Text  style={this.state.tab2 ? {color: '#f8f2ff', fontSize: 12} : {color: '#541fa1', fontSize: 12}}> Pending Payments</Text>
          <Text  style={this.state.tab2 ? {color: '#f8f2ff', fontSize: 10} : {color: '#541fa1', fontSize: 10}}> 15 Events</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.tab3 ? styles.tabStyleActive : styles.tabStyle} 
      onPress= {()=> this.updateTab('tab3')} activeOpacity={0.8}>
        <View>
          <ImageBackground 
          source={this.state.tab3 ? require('../assets/images/payments.png') : require('../assets/images/payment.png')}
          style={this.state.tab3 ? styles.imageCircleActive : styles.imageCircle}>

          </ImageBackground>
          <Text  style={this.state.tab3 ? {color: '#f8f2ff', fontSize: 12} : {color: '#541fa1', fontSize: 12}}> Completed Events</Text>
          <Text  style={this.state.tab3 ? {color: '#f8f2ff', fontSize: 12} : {color: '#541fa1', fontSize: 10}}> 15 Events</Text>
          </View>
          </TouchableOpacity>
           </View>
           <ScrollView contentContainerStyle={{}}>
      <View style={{display: "flex", flexDirection: "row"}}>
                {this.state.tab1 && !this.state.tab2 && !this.state.tab3 ? <View><EventInfoGrid status="upcoming"></EventInfoGrid><EventInfoGrid status="upcoming"></EventInfoGrid></View>: null}
                {this.state.tab2 && !this.state.tab1 && !this.state.tab3 ? <EventInfoGrid status="paymentPending"></EventInfoGrid> : null}
                {this.state.tab3 && !this.state.tab2 && !this.state.tab1 ? <EventInfoGrid status="completed"></EventInfoGrid>: null}
            </View>
            </ScrollView>
            <TouchableOpacity style={{backgroundColor:'#f2f8ff', padding: 15, marginTop: 5}}>
              <Text style={{textAlign: 'center', color: '#541fa1'}}> Add New Event </Text></TouchableOpacity>
    </View>
    )
}
}

const styles = StyleSheet.create({
 spacer : {
  marginTop: 20,
  marginBottom: 20,
  textAlign: "center"
 }, 
 imageCircle : {
   width: 30, 
   borderRadius: 20, 
   height: 30, zIndex: -1,
   backgroundColor: '#541fa1'
 }, 
 imageCircleActive :{
  width: 30, 
  borderRadius: 20, 
  height: 30, zIndex: -1,
  backgroundColor: '#f8f2ff'
 }, 
 tabStyle: {
   padding: 5,
   borderRadius: 5, 
   width: '33.33%',
   backgroundColor: '#f8f2ff'
 }, 
 tabStyleActive : {
  padding: 5,
  borderRadius: 5, 
  width: '33.33%',
  backgroundColor: '#541fa1'
 }, 
 tabSpacer : {
   marginLeft: 5,
   marginRight: 5
 }

});

