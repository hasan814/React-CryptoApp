import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";

const Chart = () => {
  // ============== Context ==============
  const { chart, setChart } = useContext(CryptoContext);

  // ============== Rendering ==============
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center">
      {/* Close Button */}
      <button
        className="absolute top-6 left-6 bg-white text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200 transition"
        onClick={() => setChart(null)}
      >
        X
      </button>
      {/* Chart Content */}
      <div className="w-[800px] mx-auto p-5 mt-12 bg-transparent border-2 border-[#404042] rounded-[20px]">
        {chart ? <p>Chart Data</p> : <p>No chart available</p>}
      </div>
    </div>
  );
};

export default Chart;
