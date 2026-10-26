
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Pages/Service";
import About from "./components/Pages/About";
import Slots from "./components/Pages/Slots";
import Bookings from "./components/Pages/Bookings";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login"
import Register from "./components/Pages/Register"

const App = () => {
  return (
   
    <div className="w-full min-h-screen overflow-x-hidden bg-white text-black">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
      </div>
     
  );
};

export default App;
