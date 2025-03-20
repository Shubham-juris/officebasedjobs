import React from "react";

import "./App.css";
import AppRoutes from "./router/Approute";
import Navbar from "./Componets/common/Navbar";
import Footer from "./Componets/common/Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-24">
        <AppRoutes />
      </div>
      <Footer/>
    </>
  );
}

export default App;
