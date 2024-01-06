import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Notification from '../components/Notification';

describe('Notification component', () => {
  test('renders the text passed to it in the props', () => {
    render(<Notification message={'test message'}/>);

    expect(screen.getByText('test message', {selector: 'p'})).toBeDefined();
  });
});