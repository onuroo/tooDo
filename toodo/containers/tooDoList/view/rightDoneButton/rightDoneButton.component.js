import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { observer, inject } from "mobx-react";
import styles from './rightDoneButton.styles.js'
import colors from '../../../../const/colors'

@inject("tooDoListStore")
@observer
export default class RightDoneButton extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    console.log(this.props.tooDoListStore.data)
    return (
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.undoText}>Undo</Text>

      </TouchableOpacity>
    );
  }
}

