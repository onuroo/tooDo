import React, { Component,PropTypes } from 'react'
import {View,TouchableOpacity,Alert,Dimensions} from 'react-native';
import moment from 'moment'
import styles from './tooDoItem.styles.js'
import Text from '../../../../components/text/text.component'
import SwipeableButton from '../../../../components/swipeableButton/swipeableButton.component'
import Images from '../../../../assets/images'
import RightUndoButton from '../rightUndoButton/rightUndoButton.component'
import RightDoneButton from '../rightDoneButton/rightDoneButton.component'
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

export default class TooDoItem extends Component {
  
  constructor(props){
    super(props)
  }
  clickedSwipeable(){
    Alert.alert('clicked swipeable')
    
  }
  clickedTouch(){
    Alert.alert('clicked touch')
  }
  render(){
    const { text } = this.props
    return(
       <SwipeableButton textOnPress={this.clickedTouch.bind(this)} onPress={this.clickedSwipeable.bind(this)} rightDoneButton={<RightDoneButton />} rightUndoButton={<RightUndoButton />} text={text} />
    )
  }
}
  


TooDoItem.PropTypes = {
  text: PropTypes.string
}

