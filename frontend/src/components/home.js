import { useState,useEffect } from "react";
import "../styles/home.css"
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiAddLargeFill } from "react-icons/ri";

import {Outlet,useNavigate} from "react-router-dom";

import OrderCard from "./orderCard.js";
function Home(){
    const navigate=useNavigate();
    const dash=require("../assets/dash.png")
    const [orders,setOrders] =useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("https://shipsy-x-apsrtc.onrender.com/api/order/myOrders", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Pass token for authentication
            },
            });

            const data = await res.json();
            console.log(data);
            setOrders(data); // Update state with fetched orders
        } catch (error) {
            console.error("Error fetching orders:", error);
        }};
        fetchOrders();
    }, []); 
    return (
        <div className="homeContainer">
            <div className="navbar">
                <div className="heading">
                    <div><h1 className="shipsy">Shipsy</h1></div>
                    <div><FaHandshakeSimple className="handshake"/></div>
                    <div ><h1>APS-RTC</h1></div>
                </div>
            </div>
            <div className="dashboard">
                <div><img src={dash} className="dashimg"/> </div>
                <div className="heading2"> <h1>My Orders</h1></div>
                <div className ="orders">
                    {
                        orders.length>0 ? (
                            orders.map ((order)=>(
                                <OrderCard key={order._id} order={order}/>
                            ))
                        )

                        :(
                            <p>No orders found</p>
                        )
                    }
                </div>
                <div className="addJob"><RiAddLargeFill onClick={() => navigate("/booking")}/></div>
            </div>
            <div className="footer">
                <footer>
                <div className="socialmedia">
                    <div>
                        <h1 className="footer1">Connect Us </h1>
                    </div>
                    <div className="footer2">
                        <a href="https://www.instagram.com/rahul_eedara/"><div> <SlSocialInstagram className="socialmedia_icons" /></div></a>
                        <a href="https://x.com/Rahul12_33?t=XkDnTHQOzaqWOkjNRE91zQ&s=08"> <div><SlSocialTwitter className="socialmedia_icons"/></div></a>
                        <a href="https://www.facebook.com/share/tZEsEo4Wg4bP2DMk/?mibextid=qi2Omg"><div><TiSocialFacebook className="socialmedia_icons"/></div></a>
                        <a href="https://www.linkedin.com/in/sri-rahul-eedara-77a7b9374/"><div><FaLinkedinIn className="socialmedia_icons"/></div></a>
                    </div>
                </div>
                </footer>
            </div>
        </div>
    )
}
export default Home;