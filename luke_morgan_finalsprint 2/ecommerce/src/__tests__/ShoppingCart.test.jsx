import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ShoppingCart from '../components/shoppingcart/ShoppingCart';
import { ShoppingCartProvider } from '../components/shoppingcartcontext/ShoppingCartContext';

test('renders shopping cart', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <ShoppingCart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
  });

  const headingElement = screen.getByText(/Shopping Cart/i);
  expect(headingElement).toBeInTheDocument();
});