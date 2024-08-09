import React from 'react';
import {render} from '@testing-library/react-native';
import ItemCard from './index';
import {StockHolding} from '../../types';
import {profitLoss} from '../../utils/calculations';

// Mock the profitLoss function
jest.mock('../../utils/calculations', () => ({
  profitLoss: jest.fn().mockReturnValue(100.5),
}));

describe('ItemCard', () => {
  const mockItemData: StockHolding = {
    symbol: 'MAHABANK',
    quantity: 990,
    ltp: 38.05,
    avgPrice: 35,
    close: 40,
  };

  it('renders correctly', () => {
    const {toJSON} = render(
      <ItemCard itemData={mockItemData} index={0} dataLength={5} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays the correct stock symbol', () => {
    const {getByTestId} = render(
      <ItemCard itemData={mockItemData} index={0} dataLength={5} />,
    );
    expect(getByTestId('stock-symbol')).toHaveTextContent('MAHABANK');
  });

  it('displays the correct LTP', () => {
    const {getByTestId} = render(
      <ItemCard itemData={mockItemData} index={0} dataLength={5} />,
    );
    expect(getByTestId('ltp-text')).toHaveTextContent('LTP: ₹ 38.05');
  });

  it('displays the correct quantity', () => {
    const {getByTestId} = render(
      <ItemCard itemData={mockItemData} index={0} dataLength={5} />,
    );
    expect(getByTestId('quantity-text')).toHaveTextContent('990');
  });

  it('displays the correct P/L', () => {
    const {getByTestId} = render(
      <ItemCard itemData={mockItemData} index={0} dataLength={5} />,
    );
    expect(getByTestId('pl-text')).toHaveTextContent('P/L: ₹ 100.50');
  });

  it('calls profitLoss function with correct arguments', () => {
    render(<ItemCard itemData={mockItemData} index={0} dataLength={5} />);
    expect(profitLoss).toHaveBeenCalledWith(mockItemData);
  });
});
