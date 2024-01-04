import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Row from '../components/Row';

describe('Row component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  const mockFn = jest.fn(array => array);

  test('renders as many buttons as there are items in the subarray passed to it in the props', () => {
    render(<Row 
      rowIndex={0} 
      gridValues={[['X', 'X', 'X', 'free']]}
      player={'X'}
      setGridValues={mockFn}
      />);

    expect(screen.getAllByRole('button')).toHaveLength(4);
  });

  test('renders as many Xs as passed to it in the props', () => {
    render(<Row 
      rowIndex={0} 
      gridValues={[['X', 'X', 'X', 'free']]}
      player={'X'}
      setGridValues={mockFn}
      />);

    expect(screen.getAllByRole('button', {name: 'X'})).toHaveLength(3);
  })

  test('renders as many empty buttons as there are free spots passed to it in the props', () => {
    render(<Row 
      rowIndex={0} 
      gridValues={[['X', 'X', 'X', 'free']]}
      player={'X'}
      setGridValues={mockFn}
      />);

    expect(screen.getByRole('button', {name: ''})).toBeDefined();
  })

  test('setGridValues is called when a free spot is clicked', () => {
    render(<Row 
      rowIndex={0} 
      gridValues={[['X', 'X', 'X', 'free']]}
      player={'X'}
      setGridValues={mockFn}
      />);

    const freeButton = screen.getByRole('button', {name: ''});

    fireEvent.click(freeButton);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith([['X', 'X', 'X', 'X']]);
  });

  test('setGridValues is not called when a taken spot is clicked', () => {
    render(<Row  
      rowIndex={0} 
      gridValues={[['X', 'free', 'free', 'free']]}
      player={'X'}
      setGridValues={mockFn}
      />);

    const freeButton = screen.getByRole('button', {name: 'X'});

    fireEvent.click(freeButton);

    expect(mockFn).toHaveBeenCalledTimes(0);
  })

  test('setGridValues is not called when a free spot is clicked when playing is not allowed', () => {
    render(<Row 
      rowIndex={0} 
      gridValues={[['X', 'X', 'X', 'free']]}
      player={'X'}
      setGridValues={mockFn}
      playingAllowed={false}
      />);

      const freeButton = screen.getByRole('button', {name: ''});

    fireEvent.click(freeButton);

    expect(mockFn).toHaveBeenCalledTimes(0);
  })
});