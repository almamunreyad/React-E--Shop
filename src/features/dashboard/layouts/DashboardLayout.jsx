import { Outlet } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex gap-8">
        <DashboardSidebar />

        <main className="flex-1 rounded-lg border bg-white p-6 shadow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
