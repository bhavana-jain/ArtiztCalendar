import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import AddTask from '../screens/AddTask';
import TaskForm from '../screens/TaskForm';
import  CustomHeader from '../components/Header.js'; 
import AddEventForm from '../screens/AddEvent.js'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login, 
      navigationOptions: {
        header: null,
      }
    },
    AddTask : {
      screen: AddTask, 
      navigationOptions: {
        header: null,
      }
    }, 
    TaskForm : {
      screen: TaskForm,
        navigationOptions: {
         header: <CustomHeader/>
     
     }
    },
    AddEvent: {
      screen: AddEventForm, 
      navigationOptions: {

      }
    } 
  },
  {
    initialRouteName: "AddEvent"
  }
  
);
AppNavigator.navigationOptions = {
  tabBarLabel: 'Calls',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),

   header: null,

        headerVisible: false,

};




const App = createAppContainer(AppNavigator)


 export default App;
