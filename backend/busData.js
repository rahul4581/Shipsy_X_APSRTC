// seedBuses.js
import mongoose from "mongoose";
import Bus from "./models/Bus.js"; // adjust path if needed

// Connect to MongoDB
const MONGODB_URL = "mongodb+srv://rahulsrirahul95:97019036@cluster0.qi97waj.mongodb.net/"; // replace with your MongoDB URL
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Sample data for 30 buses
const busData = [
    {
        busNumber: "BUS-1",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5000,
        bookedKg: 1200,
        refrigeration: true,
        departureTime: new Date("2025-08-20T08:00:00"),
        arrivalTime: new Date("2025-08-20T14:00:00"),
    },
    {
        busNumber: "BUS-2",
        route: "Vijayawada-Bangalore",
        capacityKg: 4000,
        bookedKg: 500,
        refrigeration: false,
        departureTime: new Date("2025-08-20T09:00:00"),
        arrivalTime: new Date("2025-08-20T20:00:00"),
    },
    {
        busNumber: "BUS-3",
        route: "Vijayawada-Hyderabad",
        capacityKg: 6000,
        bookedKg: 3000,
        refrigeration: true,
        departureTime: new Date("2025-08-20T10:00:00"),
        arrivalTime: new Date("2025-08-20T16:00:00"),
    },
    {
        busNumber: "BUS-4",
        route: "Vijayawada-Bangalore",
        capacityKg: 4500,
        bookedKg: 2000,
        refrigeration: false,
        departureTime: new Date("2025-08-20T11:00:00"),
        arrivalTime: new Date("2025-08-20T21:00:00"),
    },
    {
        busNumber: "BUS-5",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5500,
        bookedKg: 2500,
        refrigeration: true,
        departureTime: new Date("2025-08-20T12:00:00"),
        arrivalTime: new Date("2025-08-20T18:00:00"),
    },
    {
        busNumber: "BUS-6",
        route: "Vijayawada-Bangalore",
        capacityKg: 5000,
        bookedKg: 1000,
        refrigeration: false,
        departureTime: new Date("2025-08-20T13:00:00"),
        arrivalTime: new Date("2025-08-20T23:00:00"),
    },
    {
        busNumber: "BUS-7",
        route: "Vijayawada-Hyderabad",
        capacityKg: 6000,
        bookedKg: 4000,
        refrigeration: true,
        departureTime: new Date("2025-08-21T08:00:00"),
        arrivalTime: new Date("2025-08-21T14:00:00"),
    },
    {
        busNumber: "BUS-8",
        route: "Vijayawada-Bangalore",
        capacityKg: 4500,
        bookedKg: 1500,
        refrigeration: false,
        departureTime: new Date("2025-08-21T09:00:00"),
        arrivalTime: new Date("2025-08-21T19:00:00"),
    },
    {
        busNumber: "BUS-9",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5000,
        bookedKg: 1000,
        refrigeration: true,
        departureTime: new Date("2025-08-21T10:00:00"),
        arrivalTime: new Date("2025-08-21T16:00:00"),
    },
    {
        busNumber: "BUS-10",
        route: "Vijayawada-Bangalore",
        capacityKg: 4000,
        bookedKg: 2500,
        refrigeration: false,
        departureTime: new Date("2025-08-21T11:00:00"),
        arrivalTime: new Date("2025-08-21T22:00:00"),
    },
    {
        busNumber: "BUS-11",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5500,
        bookedKg: 3000,
        refrigeration: true,
        departureTime: new Date("2025-08-21T12:00:00"),
        arrivalTime: new Date("2025-08-21T18:00:00"),
    },
    {
        busNumber: "BUS-12",
        route: "Vijayawada-Bangalore",
        capacityKg: 5000,
        bookedKg: 2000,
        refrigeration: false,
        departureTime: new Date("2025-08-21T13:00:00"),
        arrivalTime: new Date("2025-08-21T23:00:00"),
    },
    {
        busNumber: "BUS-13",
        route: "Vijayawada-Hyderabad",
        capacityKg: 6000,
        bookedKg: 1000,
        refrigeration: true,
        departureTime: new Date("2025-08-22T08:00:00"),
        arrivalTime: new Date("2025-08-22T14:00:00"),
    },
    {
        busNumber: "BUS-14",
        route: "Vijayawada-Bangalore",
        capacityKg: 4500,
        bookedKg: 500,
        refrigeration: false,
        departureTime: new Date("2025-08-22T09:00:00"),
        arrivalTime: new Date("2025-08-22T19:00:00"),
    },
    {
        busNumber: "BUS-15",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5000,
        bookedKg: 3000,
        refrigeration: true,
        departureTime: new Date("2025-08-22T10:00:00"),
        arrivalTime: new Date("2025-08-22T16:00:00"),
    },
    {
        busNumber: "BUS-16",
        route: "Vijayawada-Bangalore",
        capacityKg: 4000,
        bookedKg: 1000,
        refrigeration: false,
        departureTime: new Date("2025-08-22T11:00:00"),
        arrivalTime: new Date("2025-08-22T22:00:00"),
    },
    {
        busNumber: "BUS-17",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5500,
        bookedKg: 2500,
        refrigeration: true,
        departureTime: new Date("2025-08-22T12:00:00"),
        arrivalTime: new Date("2025-08-22T18:00:00"),
    },
    {
        busNumber: "BUS-18",
        route: "Vijayawada-Bangalore",
        capacityKg: 5000,
        bookedKg: 1500,
        refrigeration: false,
        departureTime: new Date("2025-08-22T13:00:00"),
        arrivalTime: new Date("2025-08-22T23:00:00"),
    },
    {
        busNumber: "BUS-19",
        route: "Vijayawada-Hyderabad",
        capacityKg: 6000,
        bookedKg: 4000,
        refrigeration: true,
        departureTime: new Date("2025-08-23T08:00:00"),
        arrivalTime: new Date("2025-08-23T14:00:00"),
    },
    {
        busNumber: "BUS-20",
        route: "Vijayawada-Bangalore",
        capacityKg: 4500,
        bookedKg: 2000,
        refrigeration: false,
        departureTime: new Date("2025-08-23T09:00:00"),
        arrivalTime: new Date("2025-08-23T19:00:00"),
    },
    {
        busNumber: "BUS-21",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5000,
        bookedKg: 1000,
        refrigeration: true,
        departureTime: new Date("2025-08-23T10:00:00"),
        arrivalTime: new Date("2025-08-23T16:00:00"),
    },
    {
        busNumber: "BUS-22",
        route: "Vijayawada-Bangalore",
        capacityKg: 4000,
        bookedKg: 2500,
        refrigeration: false,
        departureTime: new Date("2025-08-23T11:00:00"),
        arrivalTime: new Date("2025-08-23T22:00:00"),
    },
    {
        busNumber: "BUS-23",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5500,
        bookedKg: 3000,
        refrigeration: true,
        departureTime: new Date("2025-08-23T12:00:00"),
        arrivalTime: new Date("2025-08-23T18:00:00"),
    },
    {
        busNumber: "BUS-24",
        route: "Vijayawada-Bangalore",
        capacityKg: 5000,
        bookedKg: 2000,
        refrigeration: false,
        departureTime: new Date("2025-08-23T13:00:00"),
        arrivalTime: new Date("2025-08-23T23:00:00"),
    },
    {
        busNumber: "BUS-25",
        route: "Vijayawada-Hyderabad",
        capacityKg: 6000,
        bookedKg: 1000,
        refrigeration: true,
        departureTime: new Date("2025-08-24T08:00:00"),
        arrivalTime: new Date("2025-08-24T14:00:00"),
    },
    {
        busNumber: "BUS-26",
        route: "Vijayawada-Bangalore",
        capacityKg: 4500,
        bookedKg: 500,
        refrigeration: false,
        departureTime: new Date("2025-08-24T09:00:00"),
        arrivalTime: new Date("2025-08-24T19:00:00"),
    },
    {
        busNumber: "BUS-27",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5000,
        bookedKg: 3000,
        refrigeration: true,
        departureTime: new Date("2025-08-24T10:00:00"),
        arrivalTime: new Date("2025-08-24T16:00:00"),
    },
    {
        busNumber: "BUS-28",
        route: "Vijayawada-Bangalore",
        capacityKg: 4000,
        bookedKg: 1000,
        refrigeration: false,
        departureTime: new Date("2025-08-24T11:00:00"),
        arrivalTime: new Date("2025-08-24T22:00:00"),
    },
    {
        busNumber: "BUS-29",
        route: "Vijayawada-Hyderabad",
        capacityKg: 5500,
        bookedKg: 2500,
        refrigeration: true,
        departureTime: new Date("2025-08-24T12:00:00"),
        arrivalTime: new Date("2025-08-24T18:00:00"),
    },
    {
        busNumber: "BUS-30",
        route: "Vijayawada-Bangalore",
        capacityKg: 5000,
        bookedKg: 1500,
        refrigeration: false,
        departureTime: new Date("2025-08-24T13:00:00"),
        arrivalTime: new Date("2025-08-24T23:00:00"),
    }
];

// Function to insert data
const seedBuses = async () => {
    try {
        await Bus.deleteMany(); // clear existing data
        const inserted = await Bus.insertMany(busData);
        console.log(`Inserted ${inserted.length} buses successfully!`);
        mongoose.connection.close();
    } catch (err) {
        console.error("Error inserting buses:", err);
        mongoose.connection.close();
    }
};

seedBuses();
