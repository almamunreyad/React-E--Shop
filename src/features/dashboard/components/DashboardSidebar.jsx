import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `block rounded-lg px-4 py-3 transition ${
    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

export default function DashboardSidebar() {
  return (
    <aside className="w-64 rounded-lg border bg-white p-4 shadow">
      <h2 className="mb-6 text-xl font-bold">Dashboard</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard/profile" className={linkClass}>
          Profile
        </NavLink>

        <NavLink to="/dashboard/products" className={linkClass}>
          Products
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClass}>
          Orders
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
