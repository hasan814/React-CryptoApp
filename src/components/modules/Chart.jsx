import { useContext, useState } from "react";
import { CryptoContext } from "../../context/CryptoContext";
import { convertData } from "../../utils/convertData";

import {
  Line,
  XAxis,
  YAxis,
  Legend,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  // ============== State ==============
  const [type, setType] = useState("prices");

  // ============== Context ==============
  const { chart, setChart } = useContext(CryptoContext);

  // ============== Rendering ==============
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
      {/* Close Button */}
      <button
        className="
            w-8 
            h-8 
            flex 
            top-6 
            left-6 
            text-lg 
            absolute 
            font-bold 
            bg-red-400 
            rounded-full 
            text-white 
            items-center 
            justify-center 
            cursor-pointer 
            hover:bg-gray-200 
            hover:text-red-500 transition
            "
        onClick={() => setChart(null)}
      >
        X
      </button>
      {/* Chart Content */}
      <div className="w-[800px] mx-auto p-5 mt-12 bg-transparent border-2 border-[#404042] rounded-[20px]">
        <div className="w-[760px] h-[300px]">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart width={400} height={400} data={convertData(chart, type)}>
              <Line
                dataKey={type}
                stroke="#3874ff"
                type={"monotone"}
                strokeWidth={"2px"}
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey={"date"} hide />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
