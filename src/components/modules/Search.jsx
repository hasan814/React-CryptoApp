import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";

const Search = () => {
  // ============ Context ============
  const { currency, setCurrency, text, setText } = useContext(CryptoContext);

  // ============ Rendering ============
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default Search;
