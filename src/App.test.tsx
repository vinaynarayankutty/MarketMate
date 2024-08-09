import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react-native';
import App from './App';
import {fetchStocksData} from './api';

jest.mock('./api', () => ({
  fetchStocksData: jest.fn(),
}));

const mockStockHoldings = [
  {symbol: 'ICICI', quantity: 100, ltp: 118.25, avgPrice: 110, close: 105},
  {
    symbol: 'SBI',
    quantity: 150,
    ltp: 550.05,
    avgPrice: 501,
    close: 590,
  },
];

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (fetchStocksData as jest.Mock).mockResolvedValue({
      data: {userHolding: mockStockHoldings},
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders App correctly', async () => {
    const {getByTestId} = render(<App />);
    await waitFor(() => expect(getByTestId('app-container')).toBeTruthy());
    expect(getByTestId('list-container')).toBeTruthy();
    expect(getByTestId('stock-list')).toBeTruthy();
    expect(getByTestId('portfolio-summary')).toBeTruthy();
  });

  it('fetches and displays the stock data', async () => {
    const {getByTestId} = render(<App />);
    await waitFor(() => expect(fetchStocksData).toHaveBeenCalled());
    expect(getByTestId('stock-list')).toBeTruthy();
  });

  it('expands and collapses the portfolio summary', async () => {
    const {getByTestId, queryByTestId} = render(<App />);
    await waitFor(() => expect(getByTestId('expand-button')).toBeTruthy());

    //Initially, portfolio summary will be collapsed
    expect(queryByTestId('current-value')).toBeNull();

    //Expand summary
    fireEvent.press(getByTestId('expand-button'));
    await waitFor(() => expect(getByTestId('current-value')).toBeTruthy());

    //Collapse summary
    fireEvent.press(getByTestId('expand-button'));
    await waitFor(() => expect(queryByTestId('current-value')).toBeNull());
  });

  it('displays the correct porfolio summary when expanded', async () => {
    const {getByTestId, getByText} = render(<App />);
    await waitFor(() => expect(getByTestId('expand-button')).toBeTruthy());

    //Expand summary
    fireEvent.press(getByTestId('expand-button'));

    await waitFor(() => {
      expect(getByTestId('current-value')).toBeTruthy();
      expect(getByTestId('total-investment')).toBeTruthy();
      expect(getByTestId('todays-pl')).toBeTruthy();
      expect(getByTestId('total-pl')).toBeTruthy();
    });

    expect(getByText('Current Value:')).toBeTruthy();
    expect(getByText('Total Investment:')).toBeTruthy();
    expect(getByText("Today's Profit & Loss:")).toBeTruthy();
    expect(getByText('Profit & Loss:')).toBeTruthy();
  });
});
