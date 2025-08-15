import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
    busNumber: { type: String, required: true, unique: true }, // e.g., "AP09AB1234"
    route: { type: String, required: true, enum: ["Vijayawada-Hyderabad", "Vijayawada-Bangalore"] },
    capacityKg: { type: Number, required: true }, // total capacity in kg
    bookedKg: { type: Number, default: 0 }, // weight already booked
    refrigeration: { type: Boolean, default: false }, // true if refrigerated
    departureTime: { type: Date, required: true }, // for scheduling
    arrivalTime: { type: Date, required: true }, // optional, useful for search
    availableCapacity: { type: Number } // calculated field
});

busSchema.pre("save", function(next) {
    this.availableCapacity = this.capacityKg - this.bookedKg;
    next();
});

const Bus = mongoose.model("Bus", busSchema);
export default Bus;
