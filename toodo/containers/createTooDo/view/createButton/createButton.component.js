import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,TouchableOpacity,Alert} from 'react-native';
import { observer, inject } from "mobx-react";
import styles from './createButton.styles.js'
import colors from '../../../../const/colors'
import Button from '../../../../components/button/button.component.js'


@inject("tooDoListStore")
@observer
export default class CreateButton extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  createTooDoAction(){
    Alert.alert('qweqw')  
  }
  render() {
    return (
      <Button title={'Create'} onPress={() => this.createTooDoAction()} styles={{justifyContent:'center',alignItems:'center',backgroundColor:colors.colors.doneColor}} />
    );
  }
}

