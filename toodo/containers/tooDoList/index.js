import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ListView,
  FlatList,
  Alert
} from 'react-native';
import { observer, inject } from "mobx-react";
import styles from './styles.js'
import TooDoItem from './view/tooDoItem/tooDoItem.component'
import Modal from 'react-native-modal'
import ModalBox from 'react-native-modalbox'

const screen = {
  width:Dimensions.get('window').width,
  height:Dimensions.get('window').height
}

@inject("tooDoListStore")
@observer
export default class TooDoList extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      isVisibleModal: true,
      tooDoDataSource: this.props.tooDoListStore.tooDoDataSource
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'TooDo List',
    headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)} ><Text>Back</Text></TouchableOpacity>,
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('CreateTooDo')}><Text>Hi Right</Text></TouchableOpacity>
  });
  
  show(){
    Alert.alert('show')
  }
  renderRow(item){
    return(
      <View style={{width:screen.width}}>
        <TooDoItem text={item.item.text} />
      </View>
    
    ) 
  }
  render() {
    const { message, data, tooDoDataSource } = this.props.tooDoListStore
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={data}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}

