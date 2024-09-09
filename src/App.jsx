import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Card from "./Pages/Card/Card";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LogginPopUp from "./Components/LogginPopUp/LogginPopUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LogginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />}></Route>
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
