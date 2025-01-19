import { CryptoContext } from "../../context/CryptoContext";
import { useContext } from "react";

const TableCoin = () => {
  // ============ Context ============
  const { cryptoData } = useContext(CryptoContext);

  // ============ Rendering ============
  return <div>TableCoin</div>;
};

export default TableCoin;
