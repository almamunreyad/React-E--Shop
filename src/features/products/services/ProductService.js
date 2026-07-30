import { api } from "../../../shared/services/api";

// get all products
export function getAllProducts() {
    return api("/products");
}

// get single product
export function getProductById(id) {
    return api(`/products/${id}`);
}

// create product
export function createProduct(product) {
    return api("/products", {
        method: "POST",
        body: JSON.stringify(product)
    })
}


// Update Product
export function updateProduct(id, product) {
    return api(`/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify(product),
    });
}


// Delete Product
export function deleteProduct(id) {
    return api(`/products/${id}`, {
        method: "DELETE",
    });
}