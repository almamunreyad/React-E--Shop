import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold">
          E- Shop
        </Link>

        <nav className="flex gap-6">
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">🛒 Cart (0)</Link>
          <Link to="/dashboard">Dashboard</Link>

          <Link
            to="/login"
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Login
          </Link>
          <button className="rounded bg-red-600 px-4 py-2 text-white">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
