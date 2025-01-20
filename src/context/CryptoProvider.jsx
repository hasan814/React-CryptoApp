import { fetchData, marketChart, searchCoin } from "../services/fetchData";
import { useEffect, useState } from "react";
import { CryptoContext } from "./CryptoContext";
import { Toaster } from "react-hot-toast";

import PropTypes from "prop-types";
import toast from "react-hot-toast";

const CryptoProvider = ({ children }) => {
  // ============== State ===============
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  const [coins, setCoins] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

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
    setCoins([]);
    if (!text) return;
    const searchCryptoData = async () => {
      try {
        setIsLoading(true);
        const { data } = await searchCoin(text);
        if (data.coins) setCoins(data.coins);
      } catch (error) {
        console.error(`Failed to fetch data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    searchCryptoData();
  }, [text]);

  // ============== Show Handler ===============
  const showHandler = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await marketChart(id);
      if (data) {
        setChart(data);
        toast.success("Chart data loaded successfully!");
      } else {
        toast.error("No data available for the selected coin.");
      }
    } catch (error) {
      console.error(`Failed to load chart data: ${error.message}`);
      toast.error(`Failed to load chart data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // ============== Rendering ===============
  return (
    <CryptoContext.Provider
      value={{
        text,
        page,
        coins,
        chart,
        setPage,
        setText,
        currency,
        setChart,
        isLoading,
        cryptoData,
        setCurrency,
        showHandler,
      }}
    >
      <Toaster />
      {children}
    </CryptoContext.Provider>
  );
};

CryptoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CryptoProvider;
