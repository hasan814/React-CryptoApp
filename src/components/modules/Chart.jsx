import { useContext, useState } from "react";
import { CryptoContext } from "../../context/CryptoContext";

import Drowing from "./Drowing";

const Chart = () => {
  // ============== State ==============
  const [type, setType] = useState("prices");

  // ============== Context ==============
  const { setChart } = useContext(CryptoContext);

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
      <Drowing type={type} setType={setType} />
    </div>
  );
};

export default Chart;
