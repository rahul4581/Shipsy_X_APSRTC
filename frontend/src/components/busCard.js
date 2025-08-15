// BusCard.jsx
import React from "react";
import "../styles/busCard.css";

const BusCard = ({ bus }) => {
  return (
    <div className="bus-card">
      <div className="bus-card-header">
        <h3>{bus.busNumber}</h3>
        <span className={`refrigeration ${bus.refrigeration ? "yes" : "no"}`}>
          {bus.refrigeration ? "Refrigerated" : "Non-Refrigerated"}
        </span>
      </div>
      <div className="bus-card-body">
        <p><strong>Route:</strong> {bus.route}</p>
        <p><strong>Available Capacity:</strong> {bus.availableCapacity} kg</p>
        <p><strong>Departure:</strong> {new Date(bus.departureTime).toLocaleString()}</p>
        <p><strong>Arrival:</strong> {new Date(bus.arrivalTime).toLocaleString()}</p>
      </div>
      <div className="bus-card-footer"> <button>Book Now</button></div>
    </div>
  );
};

export default BusCard;
