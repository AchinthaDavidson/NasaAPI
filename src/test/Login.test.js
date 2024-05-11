// Login.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../pages/Login/Login';

describe('Login component', () => {
  it('renders correctly', () => {
    const { getByText, getByLabelText } = render(<Login />);
    
    // Check if the login/sign-up text is rendered
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Don’t have an account?')).toBeInTheDocument();
    expect(getByText('Sign Up')).toBeInTheDocument();
    
    // Check if email and password fields are rendered
    expect(getByLabelText('Email address')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('allows users to switch between login and sign-up', () => {
    const { getByText } = render(<Login />);
    
    // Click on the "Sign Up" link
    fireEvent.click(getByText('Sign Up'));
    
    // Check if the text changes to "Sign Up" and the link text changes to "Login"
    expect(getByText('Sign Up')).toBeInTheDocument();
    expect(getByText('Already have an account?')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('performs login when login button is clicked', async () => {
    const { getByText, getByLabelText } = render(<Login />);
    
    // Fill in email and password fields
    fireEvent.change(getByLabelText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    
    // Click on the login button
    fireEvent.click(getByText('Login'));
    
    // Wait for login to complete
    await waitFor(() => {
      // Check if the user is redirected to the home page after successful login
      expect(window.location.href).toBe('/app/home');
    });
  });

  it('performs sign-up when sign-up button is clicked', async () => {
    const { getByText, getByLabelText } = render(<Login />);
    
    // Click on the "Sign Up" link
    fireEvent.click(getByText('Sign Up'));
    
    // Fill in name, email, and password fields
    fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.change(getByLabelText('conferm Password'), { target: { value: 'password123' } });
    
    // Click on the sign-up button
    fireEvent.click(getByText('Sign Up'));
    
    // Wait for sign-up to complete
    await waitFor(() => {
      // Check if the success message is displayed
      expect(getByText('Success')).toBeInTheDocument();
    });
  });
});
