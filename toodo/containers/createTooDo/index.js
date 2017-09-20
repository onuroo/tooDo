import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput
} from 'react-native';
import Input from '../../components/input/input.component'
import CreateButton from './view/createButton/createButton.component'
import TextInputTitle from './view/textInputTitle/textInputTitle.component'
import TextInputDetail from './view/textInputDetail/textInputDetail.component'
import styles from './styles'

export default class CreateTooDo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Title</Text>
        <TextInputTitle />
        <Text style={styles.titleText}>Detail</Text>
        <TextInputDetail />
        <View style={styles.restContentView}></View>
        <CreateButton />
      </View>
    );
  }
}
