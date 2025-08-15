import Bus from "../models/Bus.js";
export const getBusData=async(req,res)=>{
    try{
        const busses= await Bus.find();
        res.json(busses);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}