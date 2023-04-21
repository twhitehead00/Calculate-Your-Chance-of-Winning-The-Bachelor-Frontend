import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';


test('renders form inputs', () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/First name/i);
  expect(nameInput).toBeInTheDocument();

  const ageInput = screen.getByPlaceholderText(/Age/i);
  expect(ageInput).toBeInTheDocument();

  const hometownSelect = screen.getByLabelText(/Select hometown/i);
  expect(hometownSelect).toBeInTheDocument();

  const seasonSelect = screen.getByLabelText(/Select season/i);
  expect(seasonSelect).toBeInTheDocument();

  const raceSelect = screen.getByLabelText(/Select race/i);
  expect(raceSelect).toBeInTheDocument();

  const jobCategorySelect = screen.getByLabelText(/Select job/i);
  expect(jobCategorySelect).toBeInTheDocument();

  const jokeEntranceSelect = screen.getByLabelText(/Did you make a joke entrance?/i);
  expect(jokeEntranceSelect).toBeInTheDocument();

  const oneOnOneSelect = screen.getByLabelText(/During which week did you have your first 1 on 1 date:/i);
  expect(oneOnOneSelect).toBeInTheDocument();

  const FIRSelect = screen.getByLabelText(/Did you receive the first impression rose?/i);
  expect(FIRSelect).toBeInTheDocument();
});