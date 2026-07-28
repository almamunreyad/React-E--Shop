export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="rounded bg-gray-200 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        Previous
      </button>

      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="rounded bg-gray-200 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
