import express from "express"
import {getBusData} from "../controllers/busControllers.js"
const router=express.Router();

router.get('/getBusData',getBusData)

export default router;