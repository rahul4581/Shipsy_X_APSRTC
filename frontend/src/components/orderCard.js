import React from "react";
import "../styles/orderCard.css";
import axios from "axios"
import {useNavigate } from "react-router-dom"
const OrderCard = ({ order }) => {
  const token=localStorage.getItem("token")
  const navigate=useNavigate();
  const handleCancel = async (orderId) => {
    try {
      await axios.delete(`https://shipsy-x-apsrtc.onrender.com/api/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Order cancelled successfully");
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Failed to cancel order");
    }
  };
  return (
    <div className="order-card">
      <h3 className="order-title">{order.busNumber}</h3>
      <p className="order-route">{order.route}</p>
      <p className="order-info">
        <strong>Refrigerated:</strong> {order.refrigerated ? "Yes ❄️" : "No 🔆"}
      </p>
      <p className="order-info">
        <strong>Departure:</strong> {new Date(order.departureTime).toLocaleString()}
      </p>
      <p className="order-info">
        <strong>Arrival:</strong> {new Date(order.arrivalTime).toLocaleString()}
      </p>
      <button className="order-button" onClick={() => handleCancel(order._id)}>Cancel Order</button>
    </div>
  );
};

export default OrderCard;
