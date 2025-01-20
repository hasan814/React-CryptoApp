import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";
import { v4 } from "uuid";

import TableRow from "./TableRow";

const TableCoin = () => {
  // ============ Context ============
  const { cryptoData } = useContext(CryptoContext);

  // ============ Rendering ============
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-200">Coin</th>
            <th className="px-4 py-2 text-left border border-gray-200">Name</th>
            <th className="px-4 py-2 text-left border border-gray-200">
              Price
            </th>
            <th className="px-4 py-2 text-left border border-gray-200">24h</th>
            <th className="px-4 py-2 text-left border border-gray-200">
              Total Volume
            </th>
            <th className="px-4 py-2 text-left border border-gray-200"></th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin) => (
            <TableRow {...coin} key={v4()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoin;
