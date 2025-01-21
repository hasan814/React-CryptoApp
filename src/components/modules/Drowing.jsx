import { CryptoContext } from "../../context/CryptoContext";
import { convertData } from "../../utils/convertData";
import { useContext } from "react";

import PropTypes from "prop-types";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Drowing = ({ type, setType }) => {
  // ================ Context =================
  const { chart } = useContext(CryptoContext);
  if (!chart || !chart.coin)
    return (
      <p className="text-center text-gray-500">No Chart Data available.</p>
    );

  // ================ Type Handler =================
  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };
  // ================ Rendering =================
  return (
    <div className="w-[800px] mx-auto p-5 mt-12 bg-gray-100 shadow-lg border border-gray-200 rounded-lg">
      {/* Header Section */}
      <div className="flex items-center mb-8">
        <img
          className="w-[40px] h-[40px] mr-5"
          src={chart.coin.image}
          alt={chart.coin.name}
        />
        <p className="text-xl font-semibold text-gray-800">{chart.coin.name}</p>
      </div>

      {/* Chart Section */}
      <div className="w-full h-[300px] mb-8 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={400} height={400} data={convertData(chart, type)}>
            <Line
              dataKey={type}
              stroke="#3874ff"
              type="monotone"
              strokeWidth={2}
            />
            <CartesianGrid stroke="#e5e7eb" />
            <YAxis dataKey={type} domain={["auto", "auto"]} />
            <XAxis dataKey="date" hide />
            <Legend />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Button Section */}
      <div className="flex justify-center space-x-4 mb-8" onClick={typeHandler}>
        <button
          className={`px-4 py-2 font-medium rounded-lg transition ${
            type === "prices"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Prices
        </button>
        <button
          className={`px-4 py-2 font-medium rounded-lg transition ${
            type === "market_caps"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Market Caps
        </button>
        <button
          className={`px-4 py-2 font-medium rounded-lg transition ${
            type === "total_volumes"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Total Volumes
        </button>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Prices:</p>
          <span className="text-lg font-semibold text-gray-800">
            ${chart.coin.current_price.toLocaleString()}
          </span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">ATH:</p>
          <span className="text-lg font-semibold text-gray-800">
            ${chart.coin.ath.toLocaleString()}
          </span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Market Cap:</p>
          <span className="text-lg font-semibold text-gray-800">
            ${chart.coin.market_cap.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

Drowing.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};

export default Drowing;
