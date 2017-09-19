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
export default class CreateTooDo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'left',margin:10}}>Title</Text>
        <Input styles={{margin:10}} placeholder={"Title"} multiline={false} />
        <Text style={{textAlign:'left',margin:10}}>Detail</Text>
        <Input styles={{margin:10}} placeholder={"Title"} multiline={true} />
        <CreateButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

