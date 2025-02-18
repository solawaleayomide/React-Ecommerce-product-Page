import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const initialPrice = 125;
  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const totalPrice = initialPrice * quantity;

  const items = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    thumbnail: "./assets/image-product-1-thumbnail.jpg",
    quantity,
    price: 125,
    totalPrice,
  };

  function handleIncreaseBtn() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecreaseBtn() {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  }

  function handleAddtoCart(product) {
    if (quantity === 0) return;

    setCartItem((prevCart) => {
      const productExist = prevCart.find((item) => item.id === product.id);

      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity, totalPrice } : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  }

  function handleRemoveFromCart(productId) {
    setCartItem((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function handleResetBtn() {
    setCartItem([]);
    setQuantity(0);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        quantity,
        cartItem,
        initialPrice,
        handleIncreaseBtn,
        handleDecreaseBtn,
        handleAddtoCart,
        handleRemoveFromCart,
        handleResetBtn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
