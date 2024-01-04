import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GameOver from '../components/GameOver';

describe('GameOver component', () => {
  test('renders', () => {
    render(<GameOver/>);

    expect(screen.getByText('A tie')).toBeDefined();
  });
});