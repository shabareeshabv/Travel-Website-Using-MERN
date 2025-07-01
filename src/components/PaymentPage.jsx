// PaymentPage.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

function PaymentPage() {
  const location = useLocation();
  const heading = location.state?.name || "Trip Payment";
  const cost = location.state?.basePrice || "₹0";

  const [method, setMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
    amount: cost.replace(/[^0-9]/g, '') || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${formData.amount} for "${heading}" via ${method === 'card' ? 'Card' : 'UPI'} processed successfully!`);
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <h2>Make a Payment</h2>

        <div className="trip-summary">
          <h3>Trip Selected:</h3>
          <p><strong>Destination:</strong> {heading}</p>
          <p><strong>Cost:</strong> {cost}</p>
        </div>

        <div className="payment-tabs">
          <button
            className={method === 'card' ? 'active' : ''}
            onClick={() => setMethod('card')}
          >
            💳 Card
          </button>
          <button
            className={method === 'upi' ? 'active' : ''}
            onClick={() => setMethod('upi')}
          >
            🏦 UPI
          </button>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {method === 'card' && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                maxLength="16"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              <div className="row">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  maxLength="3"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {method === 'upi' && (
            <input
              type="text"
              name="upiId"
              placeholder="Enter UPI ID (e.g., name@upi)"
              value={formData.upiId}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="number"
            name="amount"
            placeholder="Amount (INR)"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <button type="submit">Pay Now</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
