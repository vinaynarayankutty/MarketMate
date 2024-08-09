import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upstox Holding</Text>
    </View>
  );
};

export default Header;
