export default function FormError({ message }) {
  if (!message) {
    return null;
  }
  return <p className="rounded bg-red-100 p-3 text-red-700">{message}</p>;
}
