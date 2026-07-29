import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../cart/context/CartContext";

export default function ProductCard({ product }) {
  const { id, title, price, category, image, description } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <img src={image} alt={title} className="h-52 w-full object-cover" />

      <div className="p-5">
        <span className="inline-block rounded bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {category}
        </span>

        <h2 className="mt-4 text-xl font-bold">{title}</h2>

        <p className="mt-2 line-clamp-2 text-gray-600">{description}</p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-2xl font-bold text-blue-600">${price}</p>

          <Link
            to={`/products/${id}`}
            className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
