import { useEffect, useState } from "react";
import { CryptoContext } from "./CryptoContext";
import { fetchData, searchCoin } from "../services/fetchData";
import { Toaster } from "react-hot-toast";

import PropTypes from "prop-types";
import Loader from "../components/elements/Loader";
import toast from "react-hot-toast";

const CryptoProvider = ({ children }) => {
  // ============== State ===============
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);

  // ============== Effect ===============
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchData(page, currency);
        setCryptoData(data);
        toast.success("Data Loaded Successfully!");
      } catch (error) {
        toast.error(`Failed to fetch data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCryptoData();
  }, [page, currency]);

  useEffect(() => {
    if (!text) return;
    const searchCryptoData = async () => {
      try {
        const { data } = await searchCoin(text);
        if (data.coins) setCoins(data.coins);
      } catch (error) {
        console.error(`Failed to fetch data: ${error.message}`);
      }
    };
    searchCryptoData();
  }, [text]);

  // ============== Rendering ===============
  return (
    <CryptoContext.Provider
      value={{
        text,
        page,
        setPage,
        setText,
        currency,
        isLoading,
        cryptoData,
        setCurrency,
      }}
    >
      <Toaster />
      {isLoading ? <Loader /> : children}
    </CryptoContext.Provider>
  );
};

CryptoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CryptoProvider;
