import {StyleSheet} from 'react-native';
import {RPH} from '../../utils/responsive';
import * as Colors from '../../constants/colors';

const Styles = StyleSheet.create({
  container: {
    height: RPH(5),
    borderWidth: 1,
    backgroundColor: Colors.PINK,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  heading: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styles;
