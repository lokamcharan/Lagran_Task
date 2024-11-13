import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
