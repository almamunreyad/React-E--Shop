import { useState } from "react";

export function useProductSort(products) {
    const [sortBy, setSortBy] = useState("default");

    const sortedProducts = [...products];

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


    return {
        sortBy, setSortBy, sortedProducts
    }
}