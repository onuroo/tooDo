import { StyleSheet } from 'react-native';
import colors from '../../../../const/colors'

const styles = StyleSheet.create({
  touchable: {
    flex:1,
    backgroundColor:colors.colors.doneColor,
    justifyContent:'center',
    alignItems:'center'
  },
  undoText: {
    color:'#fff'
  }
});

export default styles

