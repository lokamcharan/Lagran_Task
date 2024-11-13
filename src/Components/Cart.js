import React, { useContext } from "react";
import { CartContext } from "../Components/Context";
import "../Components/Cart.css";
import Direct from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={{ backgroundColor: "grey" }}>
      <Direct />
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p>
                  <strong>Title:</strong> {item.title}
                </p>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <button
                    className="quantity-btn"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
        <div className="cart-total">
          <p>
            <strong>Total Price:</strong> ${totalPrice}
          </p>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Cart;
