import { useState } from "react";

export function useProductFilter(products) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    // create categories list
    const categories = [...new Set(products.map((product) => product.category))];


    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory = category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    });


    return {
        search, setSearch, category, categories, setCategory, filteredProducts
    }
}