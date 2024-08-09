import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {StockHolding} from '../../types';
import {profitLoss} from '../../utils/calculations';

const ItemCard: React.FC<{
  itemData: StockHolding;
  index: number;
  dataLength: number;
}> = ({itemData, index, dataLength}) => {
  return (
    <View
      testID="item-card-container"
      style={[
        styles.container,
        index === dataLength - 1 && styles.borderStyle,
      ]}>
      <View style={styles.rowContainer}>
        <Text testID="stock-symbol" style={styles.stockSymbol}>
          {itemData.symbol}
        </Text>
        <Text testID="ltp-text" style={styles.dataText}>
          LTP: <Text style={styles.boldText}>₹ {itemData.ltp}</Text>
        </Text>
      </View>

      <View style={styles.rowContainer}>
        <Text testID="quantity-text" style={styles.dataText}>
          {itemData.quantity}
        </Text>
        <Text testID="pl-text" style={styles.dataText}>
          P/L:{' '}
          <Text style={styles.boldText}>
            ₹ {profitLoss(itemData).toFixed(2)}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ItemCard;
