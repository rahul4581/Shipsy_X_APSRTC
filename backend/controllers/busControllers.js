import Bus from "../models/Bus.js";
import { spawn } from "child_process";
export const getBusData=async(req,res)=>{
    try{
        const busses= await Bus.find();
        res.json(busses);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
export const getFilterData = async (req, res) => {
    try {
        console.log("Received filter request:", req.query);

        // Now we read query parameters from req.query
        const { search, route, refrigeration } = req.query;
        const filterData={
            search,
            route,
            refrigeration
        }
        const busses=await Bus.find()
    
        // Prepare the data to send to Python
        const payload = {
            filterData,
            busses
        };

        // Spawn Python process
        const python = spawn("python", ["ai_filter_parser.py"]);

        let aiOutput = "";

        python.stdout.on("data", (data) => {
            aiOutput += data.toString();
        });

        python.stderr.on("data", (data) => {
            console.error("Python STDERR:", data.toString());
        });

        python.on("error", (err) => {
            console.error("Failed to start Python process:", err);
            return res.status(500).json({ message: "Python script error" });
        });

        python.on("close", (code) => {
            if (!aiOutput) {
                return res.status(500).json({ message: "No output from AI script" });
            }
            try {
                const closestMatches = JSON.parse(aiOutput);
                return res.json(closestMatches);
            } catch (error) {
                console.error("Error parsing Python output:", error);
                return res.status(500).json({ message: "Error parsing AI output" });
            }
        });

        // Send JSON payload to Python via stdin
        python.stdin.write(JSON.stringify(payload));
        python.stdin.end();

    } catch (err) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ message: err.message });
    }
};
