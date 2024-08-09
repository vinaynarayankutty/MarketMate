import {StyleSheet} from 'react-native';
import * as Colors from '../constants/colors';
import {RPW} from './responsive';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  listContainer: {flex: 1},

  contentContainer: {padding: 12},

  summaryContainer: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: Colors.PINK,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'space-between',
  },

  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RPW(30),
    alignSelf: 'center',
  },

  arrow: {height: RPW(8), width: RPW(8), resizeMode: 'contain'},

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  plContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 18,
  },

  titleText: {fontSize: 16, fontWeight: 'bold', color: Colors.BLACK},

  valueText: {
    fontSize: 16,
    color: Colors.BLACK,
  },
});

export default Styles;
