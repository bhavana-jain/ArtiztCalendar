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
import Carousel from 'react-native-looped-carousel';
 
const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

 
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
  this.setState({ size: { width: layout.width, height:500 } });
  
  }
 
  render() {
    return (
      <ScrollView>
      <View style={[{ flex: 1 }, styles.statusBar]} onLayout={this._onLayoutDidChange}>
        <Carousel
          style={this.state.size} autoplay = {false} bullets bulletStyle = {styles.bullet}
          chosenBulletStyle = {styles.bullet}
        >
          <View style={[{ backgroundColor: 'pink' }, this.state.size, {color: 'black'}]}><Text>cfjdgfjgf</Text></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2hhkhkhkh</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3gjhgjgjg</Text></View>
        </Carousel>
        <Text style={styles.spacer}>
By creating an account you agree to our Terms of use and Privacy Policy 
        </Text>
       
        <Button title="Add task" onPress={() => this.props.navigation.navigate('AddTask')}></Button>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bullet: {
    width: 20,
    height: 5,
    backgroundColor: 'violet',
    borderColor: 'transparent'
  },
  spacer : {
    marginBottom: 50
  }, 
  statusBar: {
marginTop: 0
}

});