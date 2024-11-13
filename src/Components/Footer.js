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
          <h4>Contact Details</h4>
          <p>E-Mail: eshop@gmail.com</p>
          <p>Contact: 9517534563</p>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <p>Instagram</p>
          <p>Google</p>
          <p>Facebook</p>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>New Balaji Nagar,</p>
          <p>Kukatpaly, Hyderabad</p>
        </div>
      </div>
    </MDBFooter>
  );
}
