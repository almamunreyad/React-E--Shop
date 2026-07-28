export default function SortSelect({ value, onChange }) {
  return (
    <div className="mb-6">
      <label className="mb-2 block font-medium">Sort By</label>

      <select value={value} onChange={onChange} className="rounded border p-3">
        <option value="default">Default</option>

        <option value="price-low">Price: Low to High</option>

        <option value="price-high">Price: High to Low</option>

        <option value="title">Title (A-Z)</option>
      </select>
    </div>
  );
}
