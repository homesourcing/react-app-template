import React from 'react';

import {QueryClientProvider} from '@tanstack/react-query';

import {Router} from './routes/Router';

import {queryClient} from './api/config';

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
