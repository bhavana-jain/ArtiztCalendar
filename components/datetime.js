import React, { Component } from 'react';
import {View, Text} from 'react-native'
import t from 'tcomb-form-native';

import DatePicker from 'react-native-datepicker';
export default class TestPicker extends Component{
constructor(props){
    super(props)
    this.state = {
        reminderDate: new Date()
    }
}
render(){
    return(
        <View>
            <Text style={{color:'#cccccc', fontSize: 14}}>Notification</Text>
        <DatePicker
        style={{width: 200}}
        date={this.state.reminderDate}
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD h:mm a"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
            dateIcon: {
                display: "none"
            },
            dateInput: {
                marginLeft: 0, 
                alignItems: 'flex-start',
                borderWidth:0
            }
        }}
        onDateChange={(date) => {this.setState({reminderDate: date})}}
    />
    </View>
    )
}
}
