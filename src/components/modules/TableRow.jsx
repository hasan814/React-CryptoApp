import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";

import PropTypes from "prop-types";
import chartDown from "../../assets/chart-down.svg";
import chartUp from "../../assets/chart-up.svg";

const TableRow = ({
  id,
  name,
  ath,
  market_cap,
  image,
  symbol,
  total_volume,
  current_price,
  price_change_percentage_24h: price_change,
}) => {
  // ============= Context ============
  const { currency, showHandler } = useContext(CryptoContext);
  const symbolCurrency =
    currency === "usd"
      ? "$"
      : currency === "eur"
      ? "€"
      : currency === "jpy"
      ? "¥"
      : "";

  // ============= Coin Data Object ============
  const coinData = {
    id,
    ath,
    name,
    image,
    symbol,
    market_cap,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  };

  // ============= Rendering ============
  return (
    <tr onClick={() => showHandler(coinData)} className="hover:bg-gray-100">
      <td className="px-4 py-2 border border-gray-200">
        <div className="flex items-center space-x-2">
          <img src={image} alt="" className="w-6 h-6" />
          <span className="font-semibold">{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td className="px-4 py-2 border border-gray-200">{name}</td>
      <td className="px-4 py-2 border border-gray-200">
        {symbolCurrency}
        {current_price.toLocaleString()}
      </td>
      <td
        className={`px-4 py-2 border border-gray-200 ${
          price_change > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {price_change.toFixed(2)}%
      </td>
      <td className="px-4 py-2 border border-gray-200">
        {total_volume.toLocaleString()}
      </td>
      <td className="px-4 py-2 border border-gray-200">
        <img
          src={price_change > 0 ? chartUp : chartDown}
          alt={name}
          className="w-6 h-6"
        />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.string.isRequired,
  ath: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  market_cap: PropTypes.number.isRequired,
  total_volume: PropTypes.number.isRequired,
  current_price: PropTypes.number.isRequired,
  price_change_percentage_24h: PropTypes.number.isRequired,
};

export default TableRow;
