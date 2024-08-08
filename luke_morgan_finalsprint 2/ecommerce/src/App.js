import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/productlist/ProductList';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import ProductDetail from './components/productdetails/ProductDetail';
import './App.css'; // Ensure you import the CSS file
import { ShoppingCartProvider } from './components/shoppingcartcontext/ShoppingCartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <div className="App">
          <header>
            <div className="greybox">
              <h1>L & M FURNITURE</h1>
            </div>


            
            <nav>
              <Link to="/">HOME</Link>
              <Link to="/cart">CART</Link>
            </nav>
            
          </header>

          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
