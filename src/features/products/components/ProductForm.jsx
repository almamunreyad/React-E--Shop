export default function ProductForm({
  formData,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
  submitText,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Title */}
      <div>
        <label className="mb-2 block font-medium">Product Title</label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          className="w-full rounded-lg border p-3"
          placeholder="Enter product title"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="mb-2 block font-medium">Price</label>

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={onChange}
          className="w-full rounded-lg border p-3"
          placeholder="99.99"
        />

        {errors.price && (
          <p className="mt-1 text-sm text-red-500">{errors.price}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block font-medium">Category</label>

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={onChange}
          className="w-full rounded-lg border p-3"
          placeholder="electronics"
        />

        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category}</p>
        )}
      </div>

      {/* Image */}
      <div>
        <label className="mb-2 block font-medium">Image URL</label>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={onChange}
          className="w-full rounded-lg border p-3"
          placeholder="https://..."
        />

        {errors.image && (
          <p className="mt-1 text-sm text-red-500">{errors.image}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block font-medium">Description</label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={onChange}
          className="w-full rounded-lg border p-3"
          placeholder="Write description..."
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? `${submitText}...` : submitText}
      </button>
    </form>
  );
}
