import { Link } from "react-router-dom";

export default function ProductRow({ product, onDelete }) {
  return (
    <tr className="border-b">
      <td className="p-3">{product.title}</td>

      <td className="p-3">${product.price}</td>

      <td className="p-3">{product.category}</td>

      <td className="p-3">
        <div className="flex justify-center gap-2">
          <Link
            to={`/products/${product.id}/edit`}
            className="rounded bg-yellow-500 px-3 py-1 text-sm text-white"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(product.id)}
            className="rounded bg-red-600 px-3 py-1 text-sm text-white"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
