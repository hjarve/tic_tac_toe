import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Winner from '../components/Winner';

describe('Winner component', () => {
  test('renders the string passed to it in the props', () => {
    render(<Winner winner={'test'}/>);

    expect(screen.getByText('test won!')).toBeDefined();
  });
});

