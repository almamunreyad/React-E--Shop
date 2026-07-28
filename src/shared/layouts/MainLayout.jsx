import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
