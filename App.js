import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  Button,
  StatusBar, Platform, 
  ScrollView 
} from 'react-native';
import App from './navigation/AppNavigator';


export default class Main extends React.Component {
  render() {
    return <App />;
  }
}
