import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import RestartButtons from '../components/RestartButtons';

describe('RestartButtons component', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  })

  const mockSave = jest.fn();
  const mockRestart = jest.fn();

  test('Renders the buttons', () => {
    render(<RestartButtons save={mockSave} restart={mockRestart}/>);

    expect(screen.findByText('Restart without saving', {selector: '.restartButton'})).toBeDefined();
    expect(screen.findByText('Save game', {selector: '.restartButton'})).toBeDefined();
  });

  test('When restart button is clicked, the function passed in the restart prop is called', () => {
    render(<RestartButtons save={mockSave} restart={mockRestart}/>);

    const restartButton = screen.getByText('Restart without saving', {selector: '.restartButton'});

    fireEvent.click(restartButton);

    expect(mockRestart).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledTimes(0);
  });

  test('When save button is clicked, the function passed in the save prop is called', () => {
    render(<RestartButtons save={mockSave} restart={mockRestart}/>);

    const saveButton = screen.getByText('Save game', {selector: '.restartButton'});
saveButton
    fireEvent.click(saveButton);

    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockRestart).toHaveBeenCalledTimes(0);
  });
})