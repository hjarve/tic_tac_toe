import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Grid from '../components/Grid';

describe('Grid component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  const mockFn = jest.fn(array => array);

  test('renders as many rows as passed to it in the props', () => {
    const { grid } = render(
      <Grid 
        xTurn={true}
        gridValues={[['X', 'X', 'O'], ['free', 'X', 'free'], ['O', 'free', 'free']]}
        setGridValues={mockFn}
      />
    );

    expect(screen.getAllByTestId('rowContainer').length).toBe(3);
  });
})