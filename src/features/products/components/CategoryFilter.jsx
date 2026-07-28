export default function CategoryFilter({ value, categories, onChange }) {
  return (
    <div className="mb-6">
      <label className="mb-2 block font-medium">Category</label>

      <select value={value} onChange={onChange} className="rounded border p-3">
        <option value="all">All Categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
