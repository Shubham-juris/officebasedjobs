import React from "react";

import "./App.css";
import Navbar from "./Componets/Navbar/Navbar";

import Footer from "./Componets/Footer/footer";
import AppRoutes from "./router/Approute";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-24">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
