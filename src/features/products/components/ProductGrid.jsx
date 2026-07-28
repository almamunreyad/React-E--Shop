import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-xl font-semibold">No products found.</h2>

        <p className="mt-2 text-gray-500">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
