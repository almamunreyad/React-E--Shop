import { useContext } from "react";

import AuthContext from "../../auth/context/AuthContext";

export default function DashboardProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">My Profile</h1>

      <div className="rounded-lg border bg-white p-6 shadow">
        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p className="mt-3">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </>
  );
}
