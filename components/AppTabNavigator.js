import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import GetTips from '../screens/GetTips'
import AddTips from '../screens/AddTips'

export const AppTabNavigator = createBottomTabNavigator({
    GetTip : {
      screen: GetTips,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/GetTips.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Get Tips",
      }
    },
    AddTip: {
      screen: AddTips,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/AddTips.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Add Tips",
      }
    }
  });
  