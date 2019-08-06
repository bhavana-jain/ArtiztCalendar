import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView, Keyboard
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import {compose, withState} from 'recompose';

let dummy = () => {
    const [count, setCount] = useState(0);
    alert(count)
   // sDate = '2015-09-09'
  // alert(sDate)
        return(
            <View>
            <DatePicker
                style={{width: 200}}
                date="2019-07-07"
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
                onDateChange={(date) => { }}
            />
            </View>
        )
}

 

const TestPicker =(({ expanded, setExpanded }) => {
    alert(expanded)
    return(
        <View>
        { expanded ? alert(expanded) : alert('f')}
    </View>
    )
}
);

const enhanceWithExpandedState = compose(withState("expanded", props => {return true}));
export default TestPicker;  