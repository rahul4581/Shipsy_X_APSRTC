
import Order from "../models/Orders.js";
import jwt from "jsonwebtoken";

export const postOrder = async (req, res) => {
  try {
    // 1️⃣ Get token from headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // 2️⃣ Verify token and get user id
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // 3️⃣ Get bus data from body
    const { busNumber, route, refrigerated, departureTime, arrivalTime } = req.body;

    if (!busNumber || !route || departureTime == null || arrivalTime == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // 4️⃣ Create new order
    const newOrder = new Order({
      user: decoded.id,
      busNumber,
      route,
      refrigerated,
      departureTime,
      arrivalTime
    });

    await newOrder.save();

    // 5️⃣ Send response
    res.status(201).json({ message: "Order placed successfully", order: newOrder });

  } catch (err) {
    console.error("Error posting order:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const myOrders = async (req, res) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const token = authHeader.split(" ")[1];

        // Verify token and get user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find orders for the logged-in user
        const orders = await Order.find({ user: decoded.id });
        console.log(orders);
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};