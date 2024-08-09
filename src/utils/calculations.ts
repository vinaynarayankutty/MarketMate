import {StockHolding} from '../types';

export const currentValue = (item: StockHolding) => {
  return item.ltp * item.quantity;
};

export const investmentValue = (item: StockHolding) => {
  return item.avgPrice * item.quantity;
};

export const profitLoss = (item: StockHolding) => {
  return currentValue(item) - investmentValue(item);
};

export const calculateTotalCurrentValue = (
  holdings: StockHolding[],
): number => {
  return holdings.reduce(
    (total, holding) => total + holding.ltp * holding.quantity,
    0,
  );
};

export const calculateTotalInvestmentValue = (
  holdings: StockHolding[],
): number => {
  return holdings.reduce(
    (total, holding) => total + holding.avgPrice * holding.quantity,
    0,
  );
};

export const calculateTotalProfitLoss = (
  totCurrentValue: number,
  totInvestmentValue: number,
): number => totCurrentValue - totInvestmentValue;

export const calculateTodaysProfitLoss = (holdings: StockHolding[]): number => {
  return holdings.reduce(
    (total, holding) =>
      total + (holding.close - holding.ltp) * holding.quantity,
    0,
  );
};
