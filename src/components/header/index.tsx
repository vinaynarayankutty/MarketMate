import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container} testID="header-container">
      <Text style={styles.heading} testID="header-text">
        Upstox Holding
      </Text>
    </View>
  );
};

export default Header;
