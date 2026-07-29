import { useEffect, useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);

  // useState(() => initialValue) Lazy Initialization State এই Function শুধু প্রথম Render-এ একবার Run হবে। যখন Initial Value Calculate করতে সময় লাগে, তখন এটা ব্যবহার করা হয়।
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart"); // getItem contain 1 argument such as: "key" same as removeItem contain only "key"

    if (savedCart) {
      return JSON.parse(savedCart); //(String → Object)
    }
    return []; // else for this if condition
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // setItem contain 2 argument such as: "key" and "value" pair. LocalStorage only store the string value. (Object → String)
  }, [cart]);

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
