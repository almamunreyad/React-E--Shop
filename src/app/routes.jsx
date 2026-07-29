import { Route, Routes } from "react-router-dom";
import ProductsPage from "../features/products/pages/ProductsPage";
import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import LoginPage from "../features/auth/pages/LoginPage";
import CartPage from "../features/cart/pages/CartPage";
import NotFoundPage from "../features/not-found/pages/NotFoundPage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
