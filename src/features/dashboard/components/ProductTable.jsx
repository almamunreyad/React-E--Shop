import ProductRow from "./ProductRow";

export default function ProductTable({ products, onDelete }) {
  if (products.length === 0) {
    return <p className="py-6 text-center text-gray-500">No products found.</p>;
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-gray-100">
          <th className="p-3 text-left">Title</th>
          <th className="p-3 text-left">Price</th>
          <th className="p-3 text-left">Category</th>
          <th className="p-3 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
