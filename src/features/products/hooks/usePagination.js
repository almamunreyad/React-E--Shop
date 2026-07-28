import { useState } from "react";

export function usePagination(products) {
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // for showing products using this paginations function
    const paginatedProducts = products.slice(startIndex, endIndex);

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

    function resetPage() {
        setCurrentPage(1)
    }

    return { currentPage, totalPages, handleNext, handlePrevious, paginatedProducts, resetPage }
}