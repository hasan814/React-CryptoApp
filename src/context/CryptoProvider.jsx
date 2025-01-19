import { CryptoContext } from "./CryptoContext";

import PropTypes from "prop-types";

const CryptoProvider = ({ children }) => {
  return <CryptoContext.Provider>{children}</CryptoContext.Provider>;
};

CryptoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CryptoProvider;
