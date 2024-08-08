import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../../components/shoppingcartcontext/ShoppingCartContext'; 
import './ShoppingCart.css';

const TAX_RATE = 0.15;
const SHIPPING_FEE = 50.00;

const ShoppingCart = () => {
  const { cart, removeFromCart } = useShoppingCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_FEE;

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-title">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  {item.name} - <span className="cart-item-price">${item.price.toFixed(2)}</span>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
              </li>
            ))}
          </ul>
          <div className="summary">
            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p><strong>Tax (15%):</strong> ${tax.toFixed(2)}</p>
            <p><strong>Shipping:</strong> ${SHIPPING_FEE.toFixed(2)}</p>
            <h2><strong>Total:</strong> ${total.toFixed(2)}</h2>
          </div>
          <button onClick={proceedToCheckout} className="checkout-button">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
