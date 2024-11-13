import React from "react";
import "./Footer.css";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "black" }}
    >
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p>E-Mail: eshop@gmail.com</p>
          <p>Contact: 9517534563</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <p>Instagram</p>
          <p>Google</p>
          <p>Facebook</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>New Balaji Nagar,</p>
          <p>Kukatpaly, Hyderabad</p>
        </div>
      </div>
    </MDBFooter>
  );
}
