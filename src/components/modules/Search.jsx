import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";
import { v4 } from "uuid";

import Loader from "../elements/Loader";

const Search = () => {
  // ============ Context ============
  const { currency, setCurrency, text, setText, coins, isLoading } =
    useContext(CryptoContext);

  // ============ Rendering ============
  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-6">
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Search coins..."
          className="border px-4 py-2 rounded w-full md:w-1/2"
        />
        <select
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center my-4">
          <Loader />
        </div>
      )}

      {/* Coin List */}
      {!!coins.length && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coins.map((coin) => (
            <li
              key={v4()}
              className="border rounded p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={coin.thumb}
                alt={coin.name}
                className="w-12 h-12 rounded-full"
              />
              <p className="font-medium">{coin.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
