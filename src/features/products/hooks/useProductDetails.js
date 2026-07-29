import { useEffect, useState } from "react";
import { getProductById } from "../services/ProductService";

export function useProductDetails(id) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        async function loadProduct() {
            try {
                setLoading(true);
                setError("");
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);


    return {
        product, loading, error
    }
}