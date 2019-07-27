import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet, 
  Button,
  ScrollView, KeyboardAvoidingView
} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment'; // For formating date and time
import { TouchableOpacity } from 'react-native-gesture-handler';
var _ = require('lodash');


const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.fieldset = {
 // flexDirection: 'row'
};
stylesheet.controlLabel.normal.color = '#cccccc' ;
stylesheet.controlLabel.normal.fontWeight = 'normal';
stylesheet.controlLabel.normal.fontSize = 14;
stylesheet.controlLabel.normal.marginBottom= 0;
stylesheet.controlLabel.error.color = '#cccccc' ;
stylesheet.controlLabel.error.fontWeight = 'normal';
stylesheet.controlLabel.error.fontSize = 14;
stylesheet.controlLabel.error.marginBottom= 0;
stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.normal.borderBottomWidth= 1;
stylesheet.textbox.normal.fontSize = 14;
stylesheet.textbox.normal.padding= 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.error.borderBottomWidth= 1;
stylesheet.textbox.error.fontSize = 14;
stylesheet.textbox.error.padding= 0;
stylesheet.textbox.error.borderBottomColor= '#cccccc';
stylesheet.textbox.normal.borderBottomColor= '#cccccc';
stylesheet.select.normal.marginLeft =  0;
stylesheet.select.normal.paddingLeft =  0;
stylesheet.dateValue.normal.paddingLeft = 0;





var eventType = t.enums({
  B: 'Birthday',
  an: 'Anniversary', 
  engage: 'engagement'
});

const Event = t.struct({
  eventStart: t.Date,
  startTime: t.Date,
  eventEnd: t.Date,
  endTime: t.Date,
  events: eventType,
  eventQuote: t.Number,
   reminder: t.Date,
   setReminder: t.Boolean,
   mgrName: t.String,
   mgrNumber: t.Number,
   clientName: t.String,
    clientNum: t.Number,
    dressCode: t.String,
   comments: t.String
});

function template(locals) {
  // in locals.inputs you find all the rendered fields
  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={formStyles.rightSpacer}>
          {locals.inputs.eventStart}
        </View>
        <View style={formStyles.leftSpacer}>
          {locals.inputs.startTime}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={formStyles.rightSpacer}>
          {locals.inputs.eventEnd}
        </View>
        <View style={formStyles.leftSpacer}>
          {locals.inputs.endTime}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={formStyles.selectOptions}>{locals.inputs.events}
        </View>
        <View style={formStyles.leftSpacer}>
          {locals.inputs.eventQuote}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>{locals.inputs.reminder}</View>
        <View>{locals.inputs.setReminder}</View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[formStyles.rightSpacer]}>{locals.inputs.mgrName}</View>
        <View style={formStyles.leftSpacer}>{locals.inputs.mgrNumber}</View>
        </View>
        <Text style={{fontSize: 18}}>Client's details</Text>
        <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>{locals.inputs.clientName}</View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={formStyles.rightSpacer}>{locals.inputs.clientNum}</View>
        <View style={formStyles.leftSpacer}>{locals.inputs.dressCode}</View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>{locals.inputs.comments}</View>
      </View> 
    </View>
  );
}
const options = {
  fields: { 
    eventStart: {
      label: 'Event Start',
      mode: 'date',
      config: {
        format: (date) => moment(date).format('dddd, MMMM YYYY'),
        dateFormat: date => moment(date).format('dddd, MMMM YYYY'),
        defaultValueText: "Thursday, 25 July"
      },
      
      
    }, 
    startTime: {
      label: 'At',
      mode: 'time', 
      config: {
        format: date => moment(date).format('h:mm a'),
        timeFormat: date => moment(date).format('h:mm a'),
      }
    }, 
    eventEnd: {
      label:'Event End',
      mode: 'date',
      config: {
        format: date => moment(date).format('dddd, MMMM YYYY'),
        dateFormat: date => moment(date).format('dddd, MMMM YYYY')
      },

    },
    endTime: {
      label:'On',
      mode: 'time',
      config: {
        format: date => moment(date).format('h:mm a'),
        timeFormat: date => moment(date).format('h:mm a'),
      },

    },
    eventQuote :{
      label: 'Event Quote in Rs'
    },
    reminder : {
      label: "Notifications",
      mode: 'datetime', 
      config : {
        format: date => moment(date).format('dddd, MMMM YYYY, h:mm a'),
        dateFormat: date => moment(date).format('dddd, MMMM YYYY, h:mm a'),
        defaultValueText: "Thursday, 25 July"
      }
    },
    mgrName: {
      label: "Event Manager's Name", 
      placeholder: "Adam"
    },
    mgrNumber: {
      label: "Manager's Number"
    }, 
     clientName: {
      label: "Client's Name"
     },
    clientNum: {
      label: "Client Number"
    }, 
     dressCode: {
      label: "Dress Code"
    },
    comments: {
     label: "Comments"
     }
  },
  stylesheet: stylesheet,
  template: template
};


const Form = t.form.Form;


export default class AddEventForm extends Component {
 
constructor(props){
  super(props)
  this.state = {
      height: Dimensions.get('window').height
  }
} 


onPress = () =>    {
  // call getValue() to get the values of the form
  var value = this.refs.form.getValue();
  if (value) { // if validation fails, value will be null
    alert(value.startTime ); // value here is an instance of Person
  }
}



  render() {
    
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <View style={{flex: 1}}>
        
        <ScrollView style={{flex: 1, paddingBottom: 20}}>
        <Form type={Event} options={options} value={this.state.value} ref="form"
 />   
        </ScrollView>
        <TouchableOpacity activeOpacity={0.9} style={{flex: 1, justifyContent: 'center', backgroundColor: '#f2f8ff', padding: 10, marginLeft: 10, marginRight: 10}} onPress={this.onPress} > 
        <Text style={{color:'#541fa1', textAlign: 'center'}}> Add Event </Text>
        </TouchableOpacity>
      </View>

</KeyboardAvoidingView>
    );
  }
}
const formStyles = StyleSheet.create({
  rightSpacer: {
    flex: 1,
    paddingRight: 15
  },
  leftSpacer: {
    flex: 1,
    paddingLeft: 15
  }, 
  selectOptions : {
    flex: 1, 
    paddingRight: 15, 
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1, 
    height: 56,
    marginBottom: 10
  }
});