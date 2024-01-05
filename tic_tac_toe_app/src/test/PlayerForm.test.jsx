import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import PlayerForm from '../components/PlayerForm';

describe('PlayerForm component', () => {
  
  beforeEach(() => {
    jest.resetAllMocks();
  })

  const mockSetPlayerX = jest.fn();
  const mockSetPlayerO = jest.fn();

  test('The input fields with their labels are rendered', () => {
    render(<PlayerForm setPlayerX={mockSetPlayerX} setPlayerO={mockSetPlayerO}/>);

    expect(screen.getByText('Player X:', {selector: 'label'})).toBeDefined();
    expect(screen.getByLabelText('Player X:', {selector: 'input'})).toBeDefined();

    expect(screen.getByText('Player O:', {selector: 'label'})).toBeDefined();
    expect(screen.getByLabelText('Player O:', {selector: 'input'})).toBeDefined();
  });

  test('The submit button is rendered', () => {
    render(<PlayerForm setPlayerX={mockSetPlayerX} setPlayerO={mockSetPlayerO}/>);

    expect(screen.getByText('OK', {selector: 'button'})).toBeDefined();
  });

  test('setPlayerX and setPlayerO are called with correct params when the form is submitted', () => {
    render(<PlayerForm setPlayerX={mockSetPlayerX} setPlayerO={mockSetPlayerO}/>);

    const inputX = screen.getByLabelText('Player X:', {selector: 'input'});
    const inputO = screen.getByLabelText('Player O:', {selector: 'input'});
    const submitButton = screen.getByText('OK', {selector: 'button'});

    fireEvent.change(inputX, {target: {value: 'name of X'}});
    fireEvent.change(inputO, {target: {value: 'name of O'}});
    fireEvent.click(submitButton);

    expect(mockSetPlayerX).toHaveBeenCalledTimes(1);
    expect(mockSetPlayerX).toHaveBeenCalledWith('name of X');

    expect(mockSetPlayerO).toHaveBeenCalledTimes(1);
    expect(mockSetPlayerO).toHaveBeenCalledWith('name of O');
  });

  test('The form is not submitted if one the fields is not filled', () => {
    render(<PlayerForm setPlayerX={mockSetPlayerX} setPlayerO={mockSetPlayerO}/>);

    const inputX = screen.getByLabelText('Player X:', {selector: 'input'});
    const submitButton = screen.getByText('OK', {selector: 'button'});

    fireEvent.change(inputX, {target: {value: 'name of X'}});
    fireEvent.click(submitButton);

    expect(mockSetPlayerX).toHaveBeenCalledTimes(0);
    expect(mockSetPlayerO).toHaveBeenCalledTimes(0);
  })

  test('The form is not submitted if the fields are not filled', () => {
    render(<PlayerForm setPlayerX={mockSetPlayerX} setPlayerO={mockSetPlayerO}/>);
    const submitButton = screen.getByText('OK', {selector: 'button'});

    fireEvent.click(submitButton);

    expect(mockSetPlayerX).toHaveBeenCalledTimes(0);
    expect(mockSetPlayerO).toHaveBeenCalledTimes(0);
  })
});