import React, {
  PropTypes,
} from 'react';
import { Text } from 'react-native';
import styles from './text.styles';
const TextC = ({ text, styles }) => {
  return (
    <Text style={styles}>
        {text}
    </Text>
  );
};
TextC.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
};
TextC.defaultProps = {
  styles: styles.styles
};
export default TextC;
