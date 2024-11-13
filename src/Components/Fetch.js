import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/Context";
import "./Fetch.css";
import axios from "axios";

function Fetch() {
  const [state, setState] = useState([]);
  const [filteredState, setFilteredState] = useState([]);
  const { addToCart, isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredState(
        state.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredState(state);
    }
  }, [selectedCategory, state]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(response.data);
        setFilteredState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      addToCart(product);
      navigate("/cart");
    }
  };

  const handleDetails = (productId) => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate(`/details/${productId}`);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  return (
    <>
      <div className="filter">
        <button
          onClick={() => handleCategoryChange("men's clothing")}
          className={activeButton === "men's clothing" ? "active" : ""}
        >
          Mens
        </button>
        <button
          onClick={() => handleCategoryChange("women's clothing")}
          className={activeButton === "women's clothing" ? "active" : ""}
        >
          Women
        </button>
        <button
          onClick={() => handleCategoryChange("")}
          className={activeButton === "" ? "active" : ""}
        >
          All
        </button>
      </div>
      <div>
        <div className="container">
          {filteredState.map((product) => (
            <div className="card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="card-image"
              />
              <p>
                <strong>Title:</strong> {product.title}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <div className="button-container">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="card-button1"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleDetails(product.id)}
                  className="card-button2"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fetch;
