import ProductList from '../components/ProductList/ProductList';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react';

test('renders product list', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );
  });

  await waitFor(() => {
    const linkElement = screen.getByText(/BED FRAME/i);
    expect(linkElement).toBeInTheDocument();
  });
});
