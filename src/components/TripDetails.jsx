import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TripDetails.css';

function TripDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const heading = location.state?.heading || "Trip Details";
  const text = location.state?.text || "No trip details available.";
  const cost = location.state?.cost || "₹198,000.00";
  const placesCovered = location.state?.placesCovered || [
    "Place A", "Place B", "Place C"
  ];
  const thingsToCarry = location.state?.thingsToCarry || [
    "Valid ID proof",
    "Warm clothes",
    "Camera",
    "Sunscreen",
    "Personal medication"
  ];

  const handleBook = () => {
    const trip = {
      name: heading,
      basePrice: cost,
    };

    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      // User not logged in; redirect to login with trip and redirect info
      navigate('/Signup', {
        state: { redirectTo: '/payment', trip }
      });
    } else {
      // User is logged in; go directly to payment
      navigate('/payment', { state: trip });
    }
  };

  return (
    <div className="trip-details-container">
      <h1>{heading}</h1>
      <p>{text}</p>

      <h3>🗺️ Places Covered:</h3>
      <ul>
        {placesCovered.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>

      <h3>🎒 Things to Carry:</h3>
      <ul>
        {thingsToCarry.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>💰 Cost: {cost}</h2>
      <button className="book-button" onClick={handleBook}>Book Now</button>
    </div>
  );
}

export default TripDetails;
