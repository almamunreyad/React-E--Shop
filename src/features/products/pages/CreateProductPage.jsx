import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/productService";
import ProductForm from "../components/ProductForm";
import { useProductForm } from "../hooks/useProductForm";
import { validateProductForm } from "../utils/productValidation";
import toast from "react-hot-toast";

export default function CreateProductPage() {
  const {
    formData,
    errors,
    setErrors,
    isSubmitting,
    handleChange,
    resetForm,
    setIsSubmitting,
  } = useProductForm();

  const navigate = useNavigate();

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

      await createProduct({
        ...formData,
        price: Number(formData.price),
      });

      // alert("Product created successfully.");
      toast.success("Product created successfully.");

      resetForm();

      navigate("/dashboard/products");
    } catch (error) {
      // alert(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <h1 className="mb-8 text-3xl font-bold">Create Product</h1>

      <ProductForm
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText="Create Product"
      />
    </div>
  );
}
