import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Details.css";
import Direct from "./Navbar";
import Footer from "./Footer";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div style={{ backgroundColor: "grey" }}>
      <Direct /> 
      {product && (
        <div className="details-container">
          <h2 className="details-title">{product.title}</h2>
          <div className="details-content">
            <img
              src={product.image}
              alt={product.title}
              className="details-image"
              style={{ width: "300px", height: "300px" }}
            />
            <div className="details-info">
              <p className="details-description">
                <strong>Description:</strong>
                {product.description}
              </p>
              <p>
                <strong>Category:</strong>
                {product.category}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
            </div>
          </div>
        </div>
      )}
      <br></br>
      <Footer />
    </div>
  );
}

export default Details;
