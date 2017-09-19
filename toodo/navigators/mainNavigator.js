import React from 'react'
import { StackNavigator } from 'react-navigation'
import {
  TooDoList,
  CreateTooDo,
} from '../containers'
const MainNavigator = StackNavigator({
  TooDoList : {
    screen: TooDoList,
  },
  CreateTooDo : {
    screen: CreateTooDo,
  },  
}, {
  headerMode: 'float',
  navigationOptions: {
    headerBackTitle: null
  }
})
export default MainNavigator