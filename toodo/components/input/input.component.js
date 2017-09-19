import React, {
  PropTypes,
} from 'react';
import { TextInput} from 'react-native';
import styles from './input.styles';
const Input = ({ onChangeText, styles, placeholder, multiline }) => {
  return (
    <TextInput style={styles} onChangeText={onChangeText} multiline={multiline} placeholder={placeholder} />
  );
};
Input.propTypes = {
  onChangeText: PropTypes.func,
  styles: PropTypes.object,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
};
Input.defaultProps = {
  styles: styles.styles
};
export default Input;
