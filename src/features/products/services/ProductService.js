import { api } from "../../../shared/services/api";

// get all products
export function getAllProducts() {
    return api("/products");
}

// get single product
export function getProductById(id) {
    return api(`/products/${id}`);
}