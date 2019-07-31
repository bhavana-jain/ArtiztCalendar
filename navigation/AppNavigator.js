import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, navigation } from 'react-navigation';
import Login from '../screens/Login';
import AddTask from '../screens/AddTask';
import TaskForm from '../screens/TaskForm';
import  CustomHeader from '../components/Header.js'; 
import AddEventForm from '../screens/AddEvent.js'

// Stack navigation with header customization
const LoginScreen = createStackNavigator(
  {
    MainScreen: {
      screen: Login,
      navigationOptions : {
        header: null
      }
    }, 
  }
);
const createEventSplash = createStackNavigator(
  {
    MainScreen: {
      screen: AddTask,
      navigationOptions : {
        header: null
      }
    }, 
  }
);
const EventInfoList = createStackNavigator(
  {
    MainScreen: {
      screen: TaskForm,
      navigationOptions : {
        header: <CustomHeader/>
      }
    }, 
  }
);
const AddNewEvent = createStackNavigator(
  { 
    MainScreen: {
      screen: AddEventForm,
      navigationOptions : {
        //header: <CustomHeader navigate={navigation.navigate} //>
      }
    }, 
  }
);

// Drawer navigation 
const AppNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: "Login"
      }
    },
    AddTask : {
      screen: createEventSplash,
      navigationOptions: {
        drawerLabel: "Add Task"
      }
    }, 
    TaskForm : {
      screen: EventInfoList,
      navigationOptions: {
        drawerLabel: "View Events"
      }
    },
    AddEvent: {
      screen: AddNewEvent,
      navigationOptions: {
        drawerLabel: "Create Event"
      }
    } 
  },
  {
    initialRouteName: "AddEvent"
  }
  
);
const App = createAppContainer(AppNavigator)
export default App;
