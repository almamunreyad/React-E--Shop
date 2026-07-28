import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import ProductGrid from "../components/ProductGrid";
import Loader from "../../../shared/components/Loader";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";
import Pagination from "../components/Pagination";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  // console.log(products)

  // all products load
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // search filter first step
  // const filteredProducts = products.filter((product) => {
  //   return product.title.toLowerCase().includes(search.toLowerCase());
  // });

  // সব Category বের করছি
  const categories = [...new Set(products.map((product) => product.category))];

  // search and category filter without memoization
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Filter হওয়া Product-এর Copy
  const sortedProducts = [...filteredProducts];
  switch (sortBy) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "title":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;

    default:
      break;
  }

  // pagination logic
  const productsPerPage = 6;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // for showing products using this paginations function
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>

      <SearchBar search={search} onSearchChange={setSearch} />

      <div className="flex items-center gap-10">
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <SortSelect
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        />
      </div>

      <ProductGrid products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
