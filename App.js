import React from 'react';
import HomeScreen from './Screens/Home'
import Popular from './Screens/PopularMoives';
import Recommended from './Screens/Recommendation';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return (
    <AppContainer/>
     );
}

const AppTopNavigation = createMaterialTopTabNavigator({
  Recommended: {
    screen: Recommended,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  },
  Popular: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  }
});



const AppStackNavigator = createStackNavigator(
  {

    Home : {
      screen:HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  AppTopNav:{
    screen:AppTopNavigation,
    navigationOptions:{
      headerBackTitle:null,
      headerTitle : 'Recommmended Movies',
      headerStyle: {
        backgroundColor: "#d500f9"
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: RFValue(18)
      }
    }
  }
  },
  {
    initialRouteName:'Home'
  }
  )
const AppContainer = createAppContainer(AppStackNavigator)

