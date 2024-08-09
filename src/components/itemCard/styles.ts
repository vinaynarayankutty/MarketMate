import {StyleSheet} from 'react-native';
import * as Colors from '../../constants/colors';

const Styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  borderStyle: {borderBottomWidth: 0},

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },

  stockSymbol: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },

  dataText: {
    fontSize: 14,
    color: Colors.BLACK,
  },

  boldText: {
    fontWeight: 'bold',
  },
});

export default Styles;
