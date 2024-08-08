import React, { useState } from 'react';
import { useShoppingCart } from '../../components/shoppingcartcontext/ShoppingCartContext';
import './Checkout.css';

const TAX_RATE = 0.15;
const SHIPPING_FEE = 50.0;

const Checkout = () => {
  const { cart } = useShoppingCart();
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [savedInfo, setSavedInfo] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const placeOrder = () => {
    if (Object.values(billingInfo).some(info => info === '')) {
      alert('Please fill in all billing information.');
      return;
    }
    setSavedInfo(billingInfo);
    setOrderPlaced(true);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_FEE;

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <div className="order-confirmation">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your order, {savedInfo.name}!</p>
          <p>Your billing information:</p>
          <ul>
            <li>
              <strong>Email:</strong> {savedInfo.email}
            </li>
            <li>
              <strong>Address:</strong> {savedInfo.address}, {savedInfo.city},{' '}
              {savedInfo.state} {savedInfo.zip}
            </li>
          </ul>
          <p>
            Total Amount: <strong>${total.toFixed(2)}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  {item.name} -{' '}
                  <span className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary">
            <p>
              <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
            </p>
            <p>
              <strong>Tax (15%):</strong> ${tax.toFixed(2)}
            </p>
            <p>
              <strong>Shipping:</strong> ${SHIPPING_FEE.toFixed(2)}
            </p>
            <h2>
              <strong>Total:</strong> ${total.toFixed(2)}
            </h2>
          </div>
          <div className="billing-info-form">
            <h2>Billing Information</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={billingInfo.name}
                onChange={handleInputChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                required
              />
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                required
              />
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={billingInfo.city}
                onChange={handleInputChange}
                required
              />
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={billingInfo.state}
                onChange={handleInputChange}
                required
              />
              <label>ZIP Code:</label>
              <input
                type="text"
                name="zip"
                value={billingInfo.zip}
                onChange={handleInputChange}
                required
              />
              <button type="button" onClick={placeOrder}>
                Place Order
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
