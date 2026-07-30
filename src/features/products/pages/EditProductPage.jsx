import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import Loader from "../../../shared/components/Loader";
import { updateProduct } from "../services/productService";

import { useProductForm } from "../hooks/useProductForm";
import { validateProductForm } from "../utils/productValidation";
import toast from "react-hot-toast";
import { useProductDetails } from "../hooks/useProductDetails";

export default function EditProductPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { product, loading, error } = useProductDetails(id);

  const {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
  } = useProductForm();

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        price: product.price || "",
        category: product.category || "",
        image: product.image || "",
        description: product.description || "",
      });
    }
  }, [product, setFormData]);

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateProductForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      setIsSubmitting(true);

      await updateProduct(id, {
        ...formData,
        price: Number(formData.price),
      });

      // alert("Product updated successfully.");
      toast.success("Product updated successfully.");

      navigate("/dashboard/products");
    } catch (error) {
      // alert(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <h1 className="mb-8 text-3xl font-bold">Edit Product</h1>

      <ProductForm
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText="Update Product"
      />
    </div>
  );
}
