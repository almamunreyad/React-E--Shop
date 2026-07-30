import { Link } from "react-router-dom";

import Loader from "../../../shared/components/Loader";

import ProductTable from "./ProductTable";
import toast from "react-hot-toast";
import { useProducts } from "../../products/hooks/useProducts";
import { deleteProduct } from "../../products/services/ProductService";

export default function ProductManagement() {
  const { products, loading, setProducts } = useProducts();

  async function handleDelete(productId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(productId);

      setProducts((prev) => prev.filter((product) => product.id !== productId));

      // alert("Product deleted successfully.");
      toast.success("Product deleted successfully.");
    } catch (err) {
      // alert(err.message);
      toast.error(err.message);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="rounded-lg border bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Product Management</h2>

        <Link
          to="/products/create"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          + Add Product
        </Link>
      </div>

      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
}
