import { useEffect, useState } from "react";
import { CryptoContext } from "./CryptoContext";
import { fetchData } from "../services/fetchData";
import { Toaster } from "react-hot-toast";

import PropTypes from "prop-types";
import Loader from "../components/elements/Loader";
import toast from "react-hot-toast";

const CryptoProvider = ({ children }) => {
  // ============== State ===============
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // ============== Effect ===============
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchData(page);
        setCryptoData(data);
        toast.success("Data Loaded Successfully!");
      } catch (error) {
        toast.error(`Failed to fetch data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCryptoData();
  }, [page]);

  // ============== Rendering ===============
  return (
    <CryptoContext.Provider value={{ cryptoData, isLoading, page, setPage }}>
      <Toaster />
      {isLoading ? <Loader /> : children}
    </CryptoContext.Provider>
  );
};

CryptoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CryptoProvider;
