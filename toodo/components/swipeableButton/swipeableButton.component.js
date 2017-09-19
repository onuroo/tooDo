import React, {
  PropTypes,Component
} from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View ,Alert} from 'react-native';
import styles from './swipeableButton.styles';
import Swipeable from 'react-native-swipeable';
import colors from '../../const/colors'

const SwipeableButton = ({ rightDoneButton, rightUndoButton, text, onPress }) => {
    let randomNumber = Math.floor((Math.random() * 13) + 1)
    let randomTextColor = colors.tooDoBgColor[randomNumber]
    return (
        <Swipeable leftButtonWidth={50} rightButtonWidth={50} style={styles.swipeableButton} rightButtons={[rightDoneButton,rightUndoButton]}>
            <TouchableOpacity style={styles.touchable} onPress={() => onPress && onPress()} >
                <Text style={[styles.text,{color:randomTextColor}]}>{text}</Text>
            </TouchableOpacity>
        </Swipeable>
    )
}

SwipeableButton.propTypes = {
  rightButton: PropTypes.object,
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default SwipeableButton


    