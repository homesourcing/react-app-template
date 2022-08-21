import React from 'react';

import {render, screen} from '@testing-library/react';

import {Footer} from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('displays the credit group', () => {
    render(<Footer />);

    expect(screen.getByTestId('credit-group')).toBeInTheDocument();
  });
});
