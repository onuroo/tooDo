import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  swipeableButton: {
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91DC5A',
  },
  touchable: {
    maxHeight:50,
    minHeight:50,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#fff'
  },
  swipeableButton: {
    borderBottomWidth:1,
    borderBottomColor:'#E0E0E0'
  },
  text: {
    marginLeft:10,
    color:'#fff',
    fontWeight:'900',
    fontSize:15
  }
});

export default styles

