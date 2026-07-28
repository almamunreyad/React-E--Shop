export default function ErrorMessage({ message }) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-5">
      <h2 className="font-semibold text-red-700">Something went wrong</h2>

      <p className="mt-2 text-red-600">{message}</p>
    </div>
  );
}
