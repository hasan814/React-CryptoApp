import { CryptoContext } from "../../context/CryptoContext";
import { convertData } from "../../utils/convertData";
import { useContext } from "react";

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

const Drowing = ({ type }) => {
  // ================ Context =================
  const { chart } = useContext(CryptoContext);
  // ================ Rendering =================
  return (
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
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Drowing;
