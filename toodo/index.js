import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'mobx-react';
import Stores from './stores';
import MainNavigator from './navigators/mainNavigator'
export default class Index extends Component {
  componentWillMount(){
    console.disableYellowBox = true
  }
  render() {
    return (
      <Provider {...Stores}>
        <MainNavigator />
      </Provider>
    );
  }
}


