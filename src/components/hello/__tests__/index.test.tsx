import React from 'react';
import { screen } from '@testing-library/react';

import renderWithProviders from '../../../testing-util/render-with-providers';
import Hello from '..';

describe('Sample test', () => {
  it('Show hello world', () => {
    renderWithProviders(<Hello />);

    expect(screen.queryByRole('heading')).toHaveTextContent('Olá, mundo');

    expect(
      screen.getByText(
        'Leia o arquivo README.md para informações de utilização e configuração',
      ),
    ).toBeVisible();
  });
});
