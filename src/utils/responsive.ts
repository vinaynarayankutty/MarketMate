import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};

export const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};
