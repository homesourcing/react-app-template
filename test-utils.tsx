import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {render, RenderOptions} from '@testing-library/react';

interface AllTheProvidersProps {
  children?: React.ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({children}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};
