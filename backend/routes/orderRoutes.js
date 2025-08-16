import express from "express"
import {postOrder,myOrders} from "../controllers/orderControllers.js"
import Order from "../models/Orders.js"

const router=express.Router();

router.post('/postOrder',postOrder);
router.get('/myOrders',myOrders)
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    await order.deleteOne();
    res.status(200).json({ message: "Order cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
export default router