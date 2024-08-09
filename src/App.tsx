/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import Header from './components/header';
import ItemCard from './components/itemCard';
import {fetchStocksData} from './api';
import {StockHolding} from './types';
import {RPH} from './utils/responsive';
import styles from './utils/styles';
import {
  calculateTodaysProfitLoss,
  calculateTotalCurrentValue,
  calculateTotalInvestmentValue,
  calculateTotalProfitLoss,
} from './utils/calculations';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App(): React.JSX.Element {
  const [stockHoldings, setStockHoldings] = useState<StockHolding[]>([]);
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  useEffect(() => {
    fetchData();
    const timer = setTimeout(() => {
      BootSplash.hide();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    const jsonResponse = await fetchStocksData();
    setStockHoldings(jsonResponse?.data.userHolding);
  };

  const totalCurrentValue = calculateTotalCurrentValue(stockHoldings);
  const totalInvestmentValue = calculateTotalInvestmentValue(stockHoldings);
  const todaysProfitLoss = calculateTodaysProfitLoss(stockHoldings);
  const totalProfitLoss = calculateTotalProfitLoss(
    totalCurrentValue,
    totalInvestmentValue,
  );

  const handleBtnPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const renderStockData = () => {
    return (
      <FlatList
        testID="stock-list"
        data={stockHoldings}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <ItemCard
            itemData={item}
            index={index}
            dataLength={stockHoldings.length}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    );
  };

  const renderPortfolioSummary = () => {
    return (
      <View
        testID="portfolio-summary"
        style={[
          styles.summaryContainer,
          {height: isExpanded ? RPH(22) : RPH(4)},
        ]}>
        <TouchableOpacity
          testID="expand-button"
          style={styles.btnContainer}
          onPress={handleBtnPress}>
          <Image
            testID="expand-arrow"
            source={
              isExpanded
                ? require('./assets/upArrow.png')
                : require('./assets/downArrow.png')
            }
            style={styles.arrow}
          />
        </TouchableOpacity>

        {isExpanded && (
          <>
            <View style={styles.rowContainer}>
              <Text testID="current-value-label" style={styles.titleText}>
                Current Value:
              </Text>
              <Text testID="current-value" style={styles.valueText}>
                ₹{totalCurrentValue.toFixed(2)}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text testID="total-investment-label" style={styles.titleText}>
                Total Investment:
              </Text>
              <Text testID="total-investment" style={styles.valueText}>
                ₹{totalInvestmentValue.toFixed(2)}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text testID="todays-pl-label" style={styles.titleText}>
                Today's Profit & Loss:
              </Text>
              <Text testID="todays-pl" style={styles.valueText}>
                ₹{todaysProfitLoss.toFixed(2)}
              </Text>
            </View>
            <View style={styles.plContainer}>
              <Text testID="total-pl-label" style={styles.titleText}>
                Profit & Loss:
              </Text>
              <Text testID="total-pl" style={styles.valueText}>
                ₹{totalProfitLoss.toFixed(2)}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView testID="app-container" style={styles.container}>
      <Header />
      <View testID="list-container" style={styles.listContainer}>
        {renderStockData()}
        {renderPortfolioSummary()}
      </View>
    </SafeAreaView>
  );
}

export default App;
