import React from "react";
import Fetch from "./Fetch";
import "../Components/Home.css";
import Direct from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-container">
      <Direct />
      <Fetch />
      <Footer />
    </div>
  );
}

export default Home;
