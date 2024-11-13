import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const CartContext = createContext();
export const AuthContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        cartItems,
        addToCart,
        setCartItems,
      }}
    >
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartContext.Provider>
    </AppContext.Provider>
  );
};
