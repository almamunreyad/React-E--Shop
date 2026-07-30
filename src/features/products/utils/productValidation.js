export function validateProductForm(formData) {
    const errors = {};

    // Title
    if (!formData.title.trim()) {
        errors.title = "Title is required.";
    }

    // Price
    if (!formData.price) {
        errors.price = "Price is required.";
    } else if (Number(formData.price) <= 0) {
        errors.price = "Price must be greater than 0.";
    }

    // Category
    if (!formData.category.trim()) {
        errors.category = "Category is required.";
    }

    // Image
    if (!formData.image.trim()) {
        errors.image = "Image URL is required.";
    }

    // Description
    if (!formData.description.trim()) {
        errors.description = "Description is required.";
    }

    return errors;
}
