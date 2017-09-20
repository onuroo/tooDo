import React, {
  PropTypes,
} from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './button.styles';
const Button = ({ title, onPress, iconName, iconStyle, styles, textStyles, activeOpacity }) => {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={ () => onPress && onPress() } style={styles}>
        {title && <Text style={textStyles} >{title}</Text> }
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
  textStyles: PropTypes.object,
  activeOpacity: PropTypes.number
};
Button.defaultProps = {
  styles: styles.styles
};
export default Button;
