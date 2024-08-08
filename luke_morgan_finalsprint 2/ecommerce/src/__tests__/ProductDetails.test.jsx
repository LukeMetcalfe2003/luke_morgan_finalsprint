import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/productdetails/ProductDetail';
import { ShoppingCartProvider } from '../components/shoppingcartcontext/ShoppingCartContext';

test('renders product details', async () => {
  await act(async () => {
    render(
      <ShoppingCartProvider>
        <MemoryRouter initialEntries={['/product/1']}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </MemoryRouter>
      </ShoppingCartProvider>
    );
  });

  const nameElements = screen.getAllByText(/BED FRAME/i);
  expect(nameElements[0]).toBeInTheDocument();
});