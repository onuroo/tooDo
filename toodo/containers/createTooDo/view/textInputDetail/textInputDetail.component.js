import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,TouchableOpacity,Alert} from 'react-native';
import { observer, inject } from "mobx-react";
import styles from './textInputDetail.styles.js'
import colors from '../../../../const/colors'
import Input from '../../../../components/input/input.component.js'



@inject("tooDoListStore")
@observer
export default class TextInputDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  changeInputAction(){
    //Alert.alert('changeInputAction')  
  }
  render() {
    return (
       <Input
        onChangeText={(txt) => this.changeInputAction(txt)}
        styles={styles.inputStyles}
        placeholder={"Detail"}
        multiline={true} />
    );
  }
}

