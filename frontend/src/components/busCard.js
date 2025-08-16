// BusCard.jsx
import React from "react";
import "../styles/busCard.css";
import axios from "axios"
import {useNavigate } from "react-router-dom"


const BusCard = ({ bus }) => {
  const navigate=useNavigate();
  const handleBookNow= async(e,bus) =>{
    e.preventDefault();
    const token=localStorage.getItem("token");
    console.log(bus)
    console.log(token);
    const res = await fetch("http://localhost:5000/api/order/postOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(bus)
    });
    alert(bus.busNumber,"Booked Successfully")
    console.log(res.json())
    navigate("/home")
  }
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
        <p><strong>Available Capacity:</strong> {bus.capacityKg - bus.bookedKg} kg</p>
        <p><strong>Departure:</strong> {new Date(bus.departureTime).toLocaleString()}</p>
        <p><strong>Arrival:</strong> {new Date(bus.arrivalTime).toLocaleString()}</p>
      </div>
      <div className="bus-card-footer"> <button onClick={(e) => handleBookNow(e,bus)}>Book Now</button></div>
    </div>
  );
};

export default BusCard;
