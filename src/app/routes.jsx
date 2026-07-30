import { Route, Routes } from "react-router-dom";
import ProductsPage from "../features/products/pages/ProductsPage";
import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import LoginPage from "../features/auth/pages/LoginPage";
import CartPage from "../features/cart/pages/CartPage";
import NotFoundPage from "../features/not-found/pages/NotFoundPage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import CreateProductPage from "../features/products/pages/CreateProductPage";
import EditProductPage from "../features/products/pages/EditProductPage";

import DashboardLayout from "../features/dashboard/layouts/DashboardLayout";
import DashboardProfilePage from "../features/dashboard/pages/DashboardProfilePage";
import DashboardProductsPage from "../features/dashboard/pages/DashboardProductsPage";
import DashboardOrdersPage from "../features/dashboard/pages/DashboardOrdersPage";
import DashboardSettingsPage from "../features/dashboard/pages/DashboardSettingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/products/:id/edit" element={<EditProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardProfilePage />} />
          <Route path="profile" element={<DashboardProfilePage />} />
          <Route path="products" element={<DashboardProductsPage />} />
          <Route path="orders" element={<DashboardOrdersPage />} />
          <Route path="settings" element={<DashboardSettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
