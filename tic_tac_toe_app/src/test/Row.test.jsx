import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Row from '../components/Row';

describe('Row component', () => {
  test('renders the string passed to it in the props', () => {
    render(<Row rowArray={['X', 'X', 'X']} rowIndex={1} gridValues={['X', 'X', 'X']}/>

  });
});