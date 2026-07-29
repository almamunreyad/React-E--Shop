export default function Button({ type = "button", loading, children }) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
