export default function SearchBar({ search, onSearchChange }) {
  function hangleSeachChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="mb-6">
      <input
        type="text"
        value={search}
        onChange={hangleSeachChange}
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />
    </div>
  );
}
