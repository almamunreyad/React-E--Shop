import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import CartProvider from "./features/cart/context/CartProvider.jsx";
import AuthProvider from "./features/auth/context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />

          <Toaster position="top-right" reverseOrder={false} />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
