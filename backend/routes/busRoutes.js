import express from "express"
import {getBusData,getFilterData} from "../controllers/busControllers.js"
const router=express.Router();

router.get('/getBusData',getBusData)
router.get('/filter',(req,res)=>{
    console.log("hello")
    getFilterData(req,res);
})
export default router;