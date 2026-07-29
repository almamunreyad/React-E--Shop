import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // add to cart function
  function addToCart(product) {
    setCart((previousCart) => {
      // step 1
      const existingProduct = previousCart.find(
        (item) => item.id === product.id,
      );

      // step 2
      if (existingProduct) {
        return previousCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      // step 3
      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  // remove from cart function
  function removeFromCart(productId) {
    setCart((previousCart) => {
      return previousCart.filter((item) => item.id !== productId);
    });
  }

  // increase quantity function
  function increaseQuantity(productId) {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  // decrease quantity function
  function decreaseQuantity(productId) {
    setCart((previousCart) => {
      const updatedCart = previousCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);

      return updatedCart;
    });
  }

  // alternative way for decrease quantity using flatMap
  // function decreaseQuantity(productId) {
  //   setCart((previousCart) =>
  //     previousCart.flatMap((item) => {
  //       if (item.id !== productId) {
  //         return item;
  //       }

  //       if (item.quantity === 1) {
  //         return [];
  //       }

  //       return {
  //         ...item,
  //         quantity: item.quantity - 1,
  //       };
  //     }),
  //   );
  // }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
