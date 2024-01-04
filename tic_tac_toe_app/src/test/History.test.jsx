import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import History from '../components/History';

describe('History component', () => {
  test('renders the table headers', () => {
    render(<History historyArray={[{id: 1, playerX: 'xxx', playerO: 'ooo', winner: 'xxx', date: '2022-04-23T18:25:43.511Z'}]}/>);

    expect(screen.getByText('player X', {selector: 'th'})).toBeDefined();
    expect(screen.getByText('player O', {selector: 'th'})).toBeDefined();
    expect(screen.getByText('winner', {selector: 'th'})).toBeDefined();
    expect(screen.getByText('date', {selector: 'th'})).toBeDefined();
  });

  test('renders the data in the table cells passed to it in the props', () => {
    render(<History historyArray={[{id: 1, playerX: 'xxx', playerO: 'ooo', winner: 'tie', date: '2022-04-23T18:25:43.511Z'}]}/>);

    expect(screen.getByText('xxx', {selector: 'td'})).toBeDefined();
    expect(screen.getByText('ooo', {selector: 'td'})).toBeDefined();
    expect(screen.getByText('tie', {selector: 'td'})).toBeDefined();
  })

  test('Does not render the table if an empty array is passed to to it', () => {
    render(<History historyArray={[]}/>);

    expect(screen.queryByRole('table')).toBeNull();
    expect(screen.getByText('No history data available')).toBeDefined();
  })

  test('Does not render the table if no data is passed to to it', () => {
    render(<History/>);

    expect(screen.queryByRole('table')).toBeNull();
    expect(screen.getByText('No history data available')).toBeDefined();
  })

});
