import { use } from "react";
import "../styles/home.css"

import {Outlet,useNavigate} from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}
export default Home;