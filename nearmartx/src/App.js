import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ShopDetail from "./pages/ShopDetail";
import ShopkeeperNavbar from "./components/shopkeeperComponent/ShopkeeperNavbar";
import ShopDashboard from "./components/shopkeeperComponent/ShopDashboard";
import ShopProfile from "./components/shopkeeperComponent/ShopProfile";
import ItemManagement from "./components/shopkeeperComponent/ItemManagement";
import ShopkeeperLogin from "./components/shopkeeperComponent/ShopkeeperLogin";

function App() {
  const [userType, setUserType] = useState("shopkeeper");

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        
        {/* Navbar with userType */}
        {userType === "customer" ? (
          <Navbar />
        ) : userType === "shopkeeper" ? (
          <ShopkeeperNavbar />
        ) : (
          <Navbar /> // replace with admin navbar
        )}

        {/* <Navbar /> */}
        <div className="flex-grow pt-16">
          <Routes>
            {/* for customer */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/:id" element={<ShopDetail />} />
            {/* for shopkeeper */}
            <Route path="/shop/dashboard" element={<ShopDashboard />}/>
            <Route path="/shop/profile" element={<ShopProfile/>}/>
            <Route path="/shop/items" element={<ItemManagement/>}/>
            <Route path="/shop/invoice-management" element={<ShopDashboard />}/>
            <Route path="/shop/logout" element={<ShopDashboard />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// export default App;
