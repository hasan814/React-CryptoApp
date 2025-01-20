import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";

const Pagination = () => {
  // ============== Context =============
  const { page, setPage } = useContext(CryptoContext);

  // ============== Handlers =============
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((prevPage) => prevPage - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((prevPage) => prevPage + 1);
  };

  // ============== Rendering =============
  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      {/* Previous Button */}
      <button
        onClick={previousHandler}
        disabled={page === 1}
        className={`px-4 py-2 rounded ${
          page === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        <p
          className={`px-2 py-1 rounded ${
            page === 1 ? "bg-blue-600 text-white font-bold" : "text-gray-700"
          }`}
        >
          1
        </p>
        <p
          className={`px-2 py-1 rounded ${
            page === 2 ? "bg-blue-600 text-white font-bold" : "text-gray-700"
          }`}
        >
          2
        </p>
        {page > 2 && page < 9 && (
          <>
            <span className="text-gray-500">...</span>
            <p className="px-2 py-1 rounded bg-blue-600 text-white font-bold">
              {page}
            </p>
          </>
        )}
        <span className="text-gray-500">...</span>
        <p
          className={`px-2 py-1 rounded ${
            page === 9 ? "bg-blue-600 text-white font-bold" : "text-gray-700"
          }`}
        >
          9
        </p>
        <p
          className={`px-2 py-1 rounded ${
            page === 10 ? "bg-blue-600 text-white font-bold" : "text-gray-700"
          }`}
        >
          10
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={nextHandler}
        disabled={page === 10}
        className={`px-4 py-2 rounded ${
          page === 10
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
