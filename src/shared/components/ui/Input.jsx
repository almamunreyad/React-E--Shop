export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}) {
  return (
    <div>
      <label className="mb-2 block font-medium">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded border p-3 disabled:bg-gray-100"
      />
    </div>
  );
}
