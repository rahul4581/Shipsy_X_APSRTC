import Register from "./components/register.js"
import Login from "./components/login.js"
import {BrowserRouter,Router,Route,createRoutesFromElements,createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./components/home.js";
import Booking from "./components/booking.js";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
