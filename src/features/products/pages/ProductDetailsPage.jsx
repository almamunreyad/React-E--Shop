// import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { getProductById } from "../services/ProductService";
import Loader from "../../../shared/components/Loader";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import { useProductDetails } from "../hooks/useProductDetails";
import { useContext } from "react";
import CartContext from "../../cart/context/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  // before useProductDetails hook create
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // console.log(product);

  // before useProductDetails hook create
  // useEffect(() => {
  //   async function loadProduct() {
  //     try {
  //       setLoading(true);
  //       setError("");
  //       const data = await getProductById(id);
  //       setProduct(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadProduct();
  // }, [id]);

  const { product, loading, error } = useProductDetails(id);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex flex-col gap-8 p-8 md:flex-row">
          <div className="flex flex-1 items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          <div className="flex-1">
            <span className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {product.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold">{product.title}</h1>

            <p className="mt-6 text-4xl font-bold text-blue-600">
              ${product.price}
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => addToCart(id)}
                className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
              >
                Add To Cart
              </button>

              <button
                onClick={() => navigate(-1)}
                className="rounded-lg border px-6 py-3 transition hover:bg-gray-100 cursor-pointer"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
