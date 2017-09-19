import React, {
  PropTypes,
} from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './button.styles';
const Button = ({ title, onPress, iconName, iconStyle, styles }) => {
  return (
    <TouchableOpacity onPress={ () => onPress && onPress() } style={styles}>
        {title && <Text>{title}</Text> }
        {iconStyle && <Image source={iconName} style={iconStyle} />}
    </TouchableOpacity>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  iconStyle: PropTypes.object,
  styles: PropTypes.object,
};
Button.defaultProps = {
  styles: styles.styles
};
export default Button;
