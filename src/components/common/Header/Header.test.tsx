import React from 'react';

import {render, screen} from '@testing-library/react';

import {Header} from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('displays the HomeSourcing logo', () => {
    render(<Header />);

    expect(screen.getByTestId('HomeSourcing-logo')).toBeInTheDocument();
  });
});
