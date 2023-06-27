import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  test('renders navigation links correctly when user is authenticated', () => {
    const user = { name: 'John Doe' };

    render(
      <Auth0Provider
        domain="your-auth0-domain"
        clientId="your-auth0-client-id"
        redirectUri={window.location.origin}
      >
        <Router>
          <Navigation user={user} />
        </Router>
      </Auth0Provider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('renders navigation links correctly when user is not authenticated', () => {
    render(
      <Auth0Provider
        domain="your-auth0-domain"
        clientId="your-auth0-client-id"
        redirectUri={window.location.origin}
      >
        <Router>
          <Navigation user={null} />
        </Router>
      </Auth0Provider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('LogIn')).toBeInTheDocument();
  });

  test('calls handleLogout when clicking the Logout button', () => {
    const handleLogoutMock = jest.fn();

    render(
      <Auth0Provider
        domain="your-auth0-domain"
        clientId="your-auth0-client-id"
        redirectUri={window.location.origin}
      >
        <Router>
          <Navigation user={null} handleLogout={handleLogoutMock} />
        </Router>
      </Auth0Provider>
    );

    fireEvent.click(screen.getByText('LogIn'));

    expect(handleLogoutMock).toHaveBeenCalled();
  });

  test('calls handleLogin when clicking the LogIn button', () => {
    const handleLoginMock = jest.fn();

    render(
      <Auth0Provider
        domain="your-auth0-domain"
        clientId="your-auth0-client-id"
        redirectUri={window.location.origin}
      >
        <Router>
          <Navigation user={null} handleLogin={handleLoginMock} />
        </Router>
      </Auth0Provider>
    );

    fireEvent.click(screen.getByText('LogIn'));

    expect(handleLoginMock).toHaveBeenCalled();
  });
});
