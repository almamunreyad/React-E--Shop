// import { useEffect, useState } from "react";
// import { getAllProducts } from "../services/ProductService";
import ProductGrid from "../components/ProductGrid";
import Loader from "../../../shared/components/Loader";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";
import Pagination from "../components/Pagination";
import { useProducts } from "../hooks/useProducts";
import { useProductFilter } from "../hooks/useProductFilter";
import { useProductSort } from "../hooks/useProductSort";
import { usePagination } from "../hooks/usePagination";
import { useContext } from "react";
import CartContext from "../../cart/context/CartContext";

export default function ProductsPage() {
  const{cart}= useContext(CartContext)
  console.log(cart)
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("all");
  // const [sortBy, setSortBy] = useState("default");
  // const [currentPage, setCurrentPage] = useState(1);

  // console.log(products)

  // all products load before create custom useProducts hook
  // useEffect(() => {
  //   async function loadProducts() {
  //     try {
  //       const data = await getAllProducts();
  //       setProducts(data);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadProducts();
  // }, []);

  // all products load by this useproducts hook
  const { products, loading, error } = useProducts();

  // search filter first step
  // const filteredProducts = products.filter((product) => {
  //   return product.title.toLowerCase().includes(search.toLowerCase());
  // });

  // সব Category বের করছি before create useProductFilter hook
  // const categories = [...new Set(products.map((product) => product.category))];

  // search and category filter without memoization before create useProductFilter hook
  // const filteredProducts = products.filter((product) => {
  //   const matchesSearch = product.title
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   const matchesCategory = category === "all" || product.category === category;

  //   return matchesSearch && matchesCategory;
  // });

  // search and category filter
  const {
    search,
    setSearch,
    category,
    categories,
    setCategory,
    filteredProducts,
  } = useProductFilter(products);

  // Filter হওয়া Product-এর Copy before create useProductSort hook
  // const sortedProducts = [...filteredProducts];
  // switch (sortBy) {
  //   case "price-low":
  //     sortedProducts.sort((a, b) => a.price - b.price);
  //     break;

  //   case "price-high":
  //     sortedProducts.sort((a, b) => b.price - a.price);
  //     break;

  //   case "title":
  //     sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  //     break;

  //   default:
  //     break;
  // }

  // filter by useProductSort hook
  const { sortBy, setSortBy, sortedProducts } =
    useProductSort(filteredProducts);

  // pagination logic before create usePagination hook
  // const productsPerPage = 6;
  // const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // const startIndex = (currentPage - 1) * productsPerPage;
  // const endIndex = startIndex + productsPerPage;

  // // for showing products using this paginations function
  // const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  // function handlePrevious() {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }

  // function handleNext() {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }

  // pagination from use paginaton hook
  const {
    currentPage,
    totalPages,
    handleNext,
    handlePrevious,
    paginatedProducts,
    resetPage,
  } = usePagination(sortedProducts);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>

      {/* <SearchBar search={search} onSearchChange={setSearch} /> */}
      <SearchBar
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          resetPage();
        }}
      />

      <div className="flex items-center gap-10">
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
            resetPage();
          }}
        />

        <SortSelect
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
            resetPage();
          }}
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
