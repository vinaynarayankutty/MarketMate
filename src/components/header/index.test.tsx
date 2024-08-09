import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './index';

describe('Header', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Header />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays the correct heading text', () => {
    const {getByTestId} = render(<Header />);
    const headingElement = getByTestId('header-text');
    expect(headingElement.props.children).toBe('Upstox Holding');
  });
});
