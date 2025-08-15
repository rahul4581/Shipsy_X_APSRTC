import "../styles/booking.css";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn, FaHandshakeSimple } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BusCard from "./busCard.js";

function Booking() {
  const navigate = useNavigate();

  // State for filters
  const [search, setSearch] = useState("");
  const [route, setRoute] = useState("");
  const [refrigeration, setRefrigeration] = useState("");
  const [busData, setBusData] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedBuses, setDisplayedBuses] = useState([]);
  const itemsPerPage = 6;

  const handleFilterClick = () => {
    // Backend filter API call
    console.log({ search, route, refrigeration });
  };

  useEffect(() => {
    const getBusData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bus/getBusData");
        setBusData(res.data);
        console.log("res.data:", res.data);
      } catch (err) {
        console.log("error in getting data from db", err);
      }
    };
    getBusData();
  }, []);

  // Update displayedBuses whenever busData or currentPage changes
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSlice = busData.slice(indexOfFirstItem, indexOfLastItem);
    setDisplayedBuses(currentSlice);
  }, [busData, currentPage]);

  const totalPages = Math.ceil(busData.length / itemsPerPage);

  return (
    <div className="homeContainer">
      {/* Navbar */}
      <div className="navbar">
        <div className="heading">
          <div>
            <h1 className="shipsy">Shipsy</h1>
          </div>
          <div>
            <FaHandshakeSimple className="handshake" />
          </div>
          <div>
            <h1>APS-RTC</h1>
          </div>
        </div>
      </div>

      <div className="dashboard">
        {/* Bus Navbar / Filters */}
        <div className="bus-navbar">
          <div className="filter-container">
            <input
              type="text"
              placeholder="Enter Bus Number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filter-input"
            />
            <select
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className="filter-select"
            >
              <option value="">Select Route</option>
              <option value="Vijayawada-Hyderabad">Vijayawada-Hyderabad</option>
              <option value="Vijayawada-Bangalore">Vijayawada-Bangalore</option>
            </select>
            <select
              value={refrigeration}
              onChange={(e) => setRefrigeration(e.target.value)}
              className="filter-select"
            >
              <option value="">Refrigeration</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <button className="filter-button" onClick={handleFilterClick}>
              Filter
            </button>
          </div>
        </div>

        {/* Bus Cards */}
        <div className="bus-cards">
          {displayedBuses.map((bus) => (
            <BusCard key={bus._id} bus={bus} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <footer>
          <div className="socialmedia">
            <div>
              <h1 className="footer1">Connect Us</h1>
            </div>
            <div className="footer2">
              <a href="https://www.instagram.com/rahul_eedara/">
                <div>
                  <SlSocialInstagram className="socialmedia_icons" />
                </div>
              </a>
              <a href="https://x.com/Rahul12_33?t=XkDnTHQOzaqWOkjNRE91zQ&s=08">
                <div>
                  <SlSocialTwitter className="socialmedia_icons" />
                </div>
              </a>
              <a href="https://www.facebook.com/share/tZEsEo4Wg4bP2DMk/?mibextid=qi2Omg">
                <div>
                  <TiSocialFacebook className="socialmedia_icons" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sri-rahul-eedara-77a7b9374/">
                <div>
                  <FaLinkedinIn className="socialmedia_icons" />
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Booking;
