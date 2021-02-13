/*import React from 'react'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App(){
  return(
    <SafeAreaProvider>
     <AppContainer/>
    </SafeAreaProvider>
  )

}


const switchNavigator = createSwitchNavigator({
HomeScreen: { screen: HomeScreen },
BottamTab: { screen: AppTabNavigator }
})

const AppContainer = createAppContainer(switchNavigator);*/

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AddTips from "./screens/AddTips";
import GetTips from "./screens/GetTips";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  AppTips: { screen: AddTips },
  GetTips: { screen: GetTips }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});