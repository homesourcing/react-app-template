import React from 'react';
// eslint-disable-next-line node/no-unpublished-import
import {rest} from 'msw';
// eslint-disable-next-line node/no-unpublished-import
import {setupServer} from 'msw/node';
import '@testing-library/jest-dom';

import {render, screen, waitFor} from '../../../test-utils';
import {mockGetUsersResponse} from '../../../mocks/Users';

import {Dashboard} from './Dashboard';

const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(ctx.json(mockGetUsersResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('renders properly', async () => {
  render(<Dashboard />);

  await waitFor(() =>
    expect(screen.getAllByTestId('user-info-row')).toHaveLength(5)
  );
});
